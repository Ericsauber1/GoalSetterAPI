const errorHandler = (err, req, res, next) => {
	// Express provides a built in errorHandler 
	// you can overwrite the default express error handler, pass in err object parameter
	// when you throw new Error()
	// it comes here

	// if you didn't do this, it would return a content type: text/html
	// this allows us to a) do what we want, b) return a json error message
	// middleware are functions that excecute during the request/response cycle

	const statusCode = res.statusCode ? res.statusCode : 500;

	res.status(statusCode);

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

module.exports = {
	errorHandler,
};
