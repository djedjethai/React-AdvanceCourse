const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

require('dotenv').config();
const SECRET = process.env.SECRET;

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
