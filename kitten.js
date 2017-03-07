/** Mongoose Exerc.

	3/7/2017

 Exercise 1**/

 // kitten.js

 //Connecting to database

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


// Connection successful?

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


// Define Schema

var kittySchema = mongoose.Schema({
	name : String
	});

// Create model

var Kitten = mongoose.model('Kitten', kittySchema);


// Create model documents

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

// Adding properties to documents

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

// Saving each document

silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.speak();
});

// Pull up documents

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

//Document search

Kitten.find({ name: /^fluff/ }, callback);
