// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //This code is identical to the one above, but adds a unique object id at will.
//This code is for Mongo v2. If mongo v3, the code is different.



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //db = client in v3
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server'); 
	
	//findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5aac8c8d624ee80667e642de")
	// }, {
	// 	$set: { //mongodb update operator(google it!)
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((res) => {
	// 	console.log(res);
	// });

	//Challenge: change name value in Users, and $inc the age by 1
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5aab400d1a33c604497cd3ab")
	}, {
		$set: {name: 'David Mann'},
		$inc: {age: 1} //any extra mongodb operators need to be added here along with $set, not a seperate object.
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});

//db.close();
});




