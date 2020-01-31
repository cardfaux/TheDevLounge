const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Bring In Auth MiddleWare
const auth = require('../../middleware/auth');

// Bring In The Profile Model
const Profile = require('../../models/Profile');
// Bring In The User Model
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get Current Users Profile
// @access  Private
router.get('/me', auth, async (req, res) => {
	try {
		// Get Name and Avatar Properties From The User Model and Add Them To The Profile Assign Them To A Constant
		const profile = await Profile.findOne({
			user: req.user.id
		}).populate('user', ['name', 'avatar']);

		// If No Profile Send Error Message
		if (!profile) {
			return res.status(400).json({ msg: 'There Is No Profile For This User' });
		}

		// If There Is A Profile Send The Profile From The Constant Declaration From Above
		res.jason(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST api/profile/
// @desc    Create or Update A User Profile
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			check('status', 'Status Is Required')
				.not()
				.isEmpty(),
			check('skills', 'Skills Is Required')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
