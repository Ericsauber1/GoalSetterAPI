const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{
		timestamps: true,
	}
);

// User is the collection name
// It converts it to lower case (and also adds an s)
// it even does Bus -> buses
// data is found at: 
// goalsetter > users
module.exports = mongoose.model('User', userSchema);
