const express = require('express');
const router = express.Router();
const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
} = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

// being fancy, you can combine different request types if its the same route
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
