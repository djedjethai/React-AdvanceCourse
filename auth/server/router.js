const Authentication = require('./controllers/authentication');
const passport = require('passport');
// attention a ne pas oublier cet import, otherwise it does not work
const passportService = require('./services/passport');

// require('dotenv').config();
// const SECRET = process.env.SECRET;

// 'jwt' authentification. But no creation of session as we use token iedentification
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
	app.get('/', requireAuth, (req, res) => {
		res.send({hi: "there"});
	})
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
}
