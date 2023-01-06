const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
	{
		// user: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	required: true,
		// 	ref: 'User',
		// },
		text: {
			type: String,
			required: [true, 'Please add a text value'],
		},
	},
	{
		timestamps: true,
	}
);

// Goals is the collection name
// It converts it to lower case
// data is found at: 
// goalsetter > goals
module.exports = mongoose.model('Goals', goalSchema);
