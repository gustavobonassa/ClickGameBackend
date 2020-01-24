const mongoose = require('mongoose')

const ItemsSchema = new mongoose.Schema({
  botArm: {
    type: Number,
    required: true,
    default: 0
  },
  bot: {
    type: Number,
    required: true,
    default: 0
  },
  factory: {
    type: Number,
    required: true,
    default: 0
  },
  ia: {
    type: Number,
    required: true,
    default: 0
  },
  alien: {
    type: Number,
    required: true,
    default: 0
  },
  planet: {
    type: Number,
    required: true,
    default: 0
  },
  space: {
    type: Number,
    required: true,
    default: 0
  },
  galaxy: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Items', ItemsSchema)
