const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
// 	console.log(res);
// });

// Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: "5aad8bd7e6807c083c5cbb84"}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove("5aad8bd7e6807c083c5cbb84").then((todo) => {
	console.log(todo);
});