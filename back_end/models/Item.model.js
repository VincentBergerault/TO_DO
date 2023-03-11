const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  url: { type: String, required: false },
  prio: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
