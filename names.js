/** Mongoose Exerc.

	3/7/2017

	Exercise 3 **/



var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


// Define Schema
var personSchema = new.Schema ({

	name : [{first : String, 
			last : String }],
	age : Number,
	sex : String
});

// Compile model

var Person = mongoose.model('Person', personSchema);

// Create document

var cristina = new Person;

//personSchema.virtual('fullName').get(function () {

personSchema.virtual('Person').
  get(function() { return this.name.first + ' ' + this.name.last +' ' + this.age + ' ' + this.sex 
 });
  
  set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
  });
  
axl.fullName = 'William Rose'; // Now `axl.name.first` is "William"