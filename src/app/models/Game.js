const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  level: {
    type: Number,
    required: true,
    default: 0
  },
  coins: {
    type: Number,
    required: true,
    default: 0
  },
  coins_per_second: {
    type: Number,
    required: true,
    default: 0
  },
  coins_per_click: {
    type: Number,
    required: true,
    default: 0
  },
  resets: {
    type: Number,
    required: true,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Game', GameSchema)
