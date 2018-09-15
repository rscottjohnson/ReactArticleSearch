var mongoose = require("mongoose");
// var Note = require("./Note");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the model from the above schema using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
