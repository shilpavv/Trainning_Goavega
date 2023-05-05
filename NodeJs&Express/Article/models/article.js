let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  author: {
    type: String,
    // required:true
  },
  body: {
    type: String,
    required:true
  }
});
const model = mongoose.model('Article',articleSchema)
module.exports = model;
let Article = module.exports;
//console.log("fhgfgh",Article)
