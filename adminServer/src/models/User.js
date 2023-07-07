const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  contact_number: Number,
  verified: {type: Boolean, default: false},
  password: String,
  isDeleted: {type: Boolean, default: false},
},
{
  timestamps: true
});

module.exports = mongoose.model('User', schema);