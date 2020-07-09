const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

require('dotenv').config();
const SECRET = process.env.SECRET;

// create local strategy
// passport find and deal itself with password ans username. as we use email for username we need to set the option
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	// verif username and password
	User.findOne({email: email}, function(err, user) {
		console.log('find user in db');
		console.log(user);
		if (err) { return done(err); };

		if (!user) { return done(null, false); };

		console.log('dans passport');
		console.log(password);
		user.comparePassword(password, function(err, isMatch) {
			console.log('comparepassword passed');
			if (err) { return done(err); };
			if (!isMatch) { return done(null, false); };
			
			console.log('dans passport retour');
			console.log(user);
			return done(null, user);
		} )

	})
})

// setup options for jwt strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: SECRET
};


// Create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// the payload are the data we did encoded in the authentication.js file (sub: and iat:)
	// that is what we gonna use to verify the user
	// done() is a callback link to passport, and indique the status of the auth
	User.findById(payload.sub)
		.then((user) => {
			if(user) {
				done(null, user);
			} else {
				done(null, false);
			}
		})
		.catch(err => {
			return done(err, false); 
		})
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
