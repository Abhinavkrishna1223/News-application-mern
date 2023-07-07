const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: String,
  detail: String,
  image: String,
  category: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  status: String, // published, scheduled etc
  isDeleted: {type: Boolean, default: false},
},
{
  timestamps: true
});

module.exports = mongoose.model('News', schema);