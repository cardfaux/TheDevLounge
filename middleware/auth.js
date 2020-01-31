const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
	// Get Token From Headers
	const token = req.header('x-auth-token');

	// Check If No Token Exists
	if (!token) {
		return res.status(401).json({ msg: 'No Token, Authorization Denied' });
	}

	// Verify Token If There Is One
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token Is Not Valid' });
	}
};
