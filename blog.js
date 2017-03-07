/** Mongoose Exerc.

 	3/17/2017

 	Exercise 2 **/


 // Creating Schema

 	var mongoose = require('mongoose');
 	var Schema = mongoose.Schema;

 	var blog.Schema = new.Schema({

 		title : String,
 		author: String,
 		body : String,
 		comments : [{body : String, 
 					date : Date}],
        date : {type : Date, default : Date.now},
        hidden : Boolean,
        meta : { votes : Number,
         		favorites : Number}
 	})


// Creating model

var Blog = mongoose.model('Blog', blogSchema);


// Search blogs for same author

blogSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Blog').find({ author: this.type }, cb);
};

