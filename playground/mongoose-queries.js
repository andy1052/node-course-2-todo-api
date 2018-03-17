const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = "5aad6157c2044c940cce9bbf11";

// if (!ObjectID.isValid(id)) {
// 	console.log('ID Not Valid!');
// };

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id Not Found!');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

//Challenge:
//query User collection / find by id/ case 1 query works but no user
//case 2 user is found
//case 3 error occurs.

let id = "5aaca175f180c51f07d6530a";

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User does not exist');
	}
	console.log('User found: ', user);
}).catch((e) => console.log('User id does not exist', e));


