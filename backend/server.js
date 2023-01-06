const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

const app = express();

// in order to use req.body data, we need to add this middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));

// error handler needs to be below the routes 
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
