const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

/*
	express-async-handler
	npm desc: Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
	
	when we use mongoose in each of these functions/routes to interact with the db we receive a Promise
	so we're going to use async await
	by default if you use .then you'll need .catch
	async/await we would use try/catch
	if we don't want to use try/catch and want to use our errorHandler instead
	we can use a package called express-async-handler
	then you just wrap each function/route with asyncHandler
*/

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add text field');
	}
	const goal = await Goal.create({ text: req.body.text });
	res.status(200).json(goal);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error('Goal not found');
	}

	goal.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
