// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //This code is identical to the one above, but adds a unique object id at will.
//This code is for Mongo v2. If mongo v3, the code is different.



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //db = client in v3
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server'); 
	
	//deleteMany
	// db.collection('Todos').deleteMany({
	// 	text: 'Eat Lunch'
	// }).then((result) => {
	// 	console.log(result);
	// });


	//deleteOne
	// db.collection('Todos').deleteOne({
	// 	text: 'Eat Lunch'
	// }).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// });
	

	//Challenge:
	//delete by name
	// db.collection('Users').deleteMany({
	// 	name: 'Mike'
	// }).then((res) => {
	// 	console.log(res);
	// });

	//Delete by _id:
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5aab3dfa74d33d03eb3c03c4") //this new ObjectID is important to know!!!
	}).then((res) => {
		console.log(JSON.stringify(res, undefined, 2));
	})


//db.close();
});




