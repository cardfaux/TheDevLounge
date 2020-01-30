const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// Bring In The User Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
	'/',
	[
		check('name', 'Name Is Required')
			.not()
			.isEmpty(),
		check('email', 'Please Include A Valid E-Mail').isEmail(),
		check(
			'password',
			'Please Enter A Password With 6 Or More Characters'
		).isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Destructuring Properties From req.body
		const { name, email, password } = req.body;

		try {
			// See If User Exists
			let user = await User.findOne({ email: email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User Already Exists' }] });
			}

			// Get Users Gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			user = new User({
				name,
				email,
				avatar,
				password
			});

			// Encrypt Password
			const salt = await bcrypt.genSalt(10); // Creates Salt

			user.password = await bcrypt.hash(password, salt); // Hashes Password with the password and the salt

			await user.save(); // Saves The User Object with The Encrypted Password

			// Return JsonWebToken This will Return A Token In The Body, We Can Send It In The Headers
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
