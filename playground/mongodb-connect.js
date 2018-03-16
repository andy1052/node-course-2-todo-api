// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //This code is identical to the one above, but adds a unique object id at will.
//This code is for Mongo v2. If mongo v3, the code is different.


// var user = {name: 'Andre', age: 34};
// var {name} = user; //Object destructuring, es6 destructuring
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //db = client in v3
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server'); //using return means you don't need an else statement.
	//const db = client.db('TodoApp') for mongo v3

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });
	//db.close();//Mongo v3 doesnt have db.close, it's now client.close()
	//});

	//Challenge: Insert new doc into Users (name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'Andre',
	// 	age: 34,
	// 	location: 'Canada'
	// }, (err, results) => {
	// 	if (err) {
	// 		return console.log('Unable to insert User', err);
	// 	}

	// 	console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
	
});




