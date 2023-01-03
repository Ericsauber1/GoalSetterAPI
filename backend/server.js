const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();

app.get('/api/goals', (req, res) => {
	res.status(200).json({ message: 'yes2' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
