const mongoose = require('mongoose');

const StoneSchema = mongoose.Schema({
  x: {
    type: String,
    required: true
  },
  y: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Stones', StoneSchema);
