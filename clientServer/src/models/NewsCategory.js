const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  isDeleted: {type: Boolean, default: false},
},
{
  timestamps: true
});

module.exports = mongoose.model('Category', schema);