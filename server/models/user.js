var mongoose = require('mongoose');

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minLength: 1
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {User};