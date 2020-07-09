const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

// on save hook, encrypt password
// .pre() is an action wich happend before, so i should be able to use it with bcryptjs package....
userSchema.pre('save', function(next) {
	// user become an instance of user model (userSchema)
	const user = this;

	// generate a salt then run callback
	bcrypt.genSalt(10, function(err, salt) {
		if (err) {
			return next(err);
		}

		// hash(encrypt) our password using the salt 
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) {
				return next(err);
			}

			user.password = hash;
			next();
		});

	});
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
	console.log('dans compare password');
	console.log(this.password);
	console.log(candidatePassword);
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) { 
		console.log('euuuuu');
		console.log(isMatch);
		if (err) {
			console.log(err);
 			return callback(err);
 		}
 		
 		callback(null, isMatch);
 		
	});

	// bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
	// 	if (err) {
	// 		return callback(err);
	// 	}
	// 	if (isMatch) {
	// 		callback(null, isMatch);
	// 	}

	// })

	// NE FONCTIONNE PAS
	// bcrypt.compare(candidatePassword, this.password)
	// 	.then(isMatch => {
	//  		console.log('isssMMMatttchhh');
	//  		callback(null, isMatch);
	//  	})
	//  	.catch(e => { 
	//  		console.log('errror');
	//  		return callback(e);
	//  	});
}



const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;

