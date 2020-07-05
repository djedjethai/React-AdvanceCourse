const User = require('../models/user');

exports.signup = function(req, res, next) {
	User.findOne({email: req.body.email})
		.then(response => {
			if (response) {
				return res.status(422).send({error: 'email is in use'});
			}
			const newUser = new User({
				email: req.body.email,
				password: req.body.password
			})
			return newUser.save();

		})
		.then(respDb => {
			console.log(respDb);
			res.json({
				id: respDb._id,
				email: respDb.email,
				password: respDb.password
			});
		})
		.catch(e => next(e));
}
