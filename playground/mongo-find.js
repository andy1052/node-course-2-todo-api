// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //This code is identical to the one above, but adds a unique object id at will.
//This code is for Mongo v2. If mongo v3, the code is different.



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //db = client in v3
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server'); 
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID("5aab3caf11875f03a9cfb2ab")
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unabel to fetch todos');
	// });


	// db.close();
	
// db.collection('Todos').find().count().then((count) => {
// 		console.log(`Todos count: ${count}`);
		
// 	}, (err) => {
// 		console.log('Unable to fetch todos');
// 	});

db.collection('Users').find({name: 'Dave'}).toArray().then((docs) => {
	console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
	console.log(`Unable to fetch note or name does not exist`);
});



});




