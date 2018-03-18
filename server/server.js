require('./config/config');



const {ObjectID} = require('mongodb');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser'); //keep a space between library imports and local file imports.

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000; //deploying to heroku.

app.use(bodyParser.json()); //body-parse middleware

app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});


app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});



app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	 if (!ObjectID.isValid(id)) {
		return res.status(404).send();
		}
	Todo.findById(id).then((todo) => {
		if (!todo) {
		return res.status(404).send();
		console.log('Todo not found!');
		}
		res.status(200).send({todo});
		console.log(`Todo Found: ${todo}`);
	}).catch((e) => {
		res.status(400).send();
	})
});


app.delete('/todos/:id', (req, res) => {
	let id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((doc) => {
		if (!doc) {
			return res.status(404).send();
		}
		res.status(200).send({doc});
		console.log(`Todo deleted: ${doc}`);
	}).catch((e) => {
		res.status(400).send();
	});
	//get the id
	//validate the id, if not valid return 404
	//removetodoById()
	//success, if no doc, send 404, if doc, send 
	// or error(send back a 400 with empty body)
});

app.patch('/todos/:id', (req, res) => {
	let id = req.params.id;
	let body = _.pick(req.body, ['text', 'completed']);
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}
	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});


});


app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};
