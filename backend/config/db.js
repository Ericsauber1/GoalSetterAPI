const mongoose = require('mongoose');
mongoose.set('strictQuery', 'true');

/*
	mongoose
	npm desc: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).
*/

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Mongo db connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
