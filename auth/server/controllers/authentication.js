const jwt = require('jwt-simple');
const User = require('../models/user');


require('dotenv').config();
const SECRET = process.env.SECRET;

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, SECRET)
}

exports.signup = function(req, res, next) {
	User.findOne({email: req.body.email})
		.then(response => {
			if (!req.body.email || !req.body.password) {
				return res.status(422).send({error: 'you must provide email and password'});
			}
			if (response) {
				return res.status(422).send({error: 'email is in use'});
			}
			const newUser = new User({
				email: req.body.email,
				password: req.body.password
			})
			newUser.save()
				.then(respDb => {
					console.log(respDb);
					res.json({
						id: respDb._id,
						email: respDb.email,
						token: tokenForUser(newUser)
					})
				})
				.catch(e => next(e));
		})
		.catch(e => next(e));
}
