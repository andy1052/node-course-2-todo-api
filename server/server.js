const {ObjectID} = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser'); //keep a space between library imports and local file imports.

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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


app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};
