var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Creating a schema for cards
var categorySchema = new Schema({
  text: String,
  timesUsed: Number
});

// Makes the model for the schema useful
module.exports = mongoose.model('Category', categorySchema);
