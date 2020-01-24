const mongoose = require('mongoose')

const GameShopSchema = new mongoose.Schema({
  quantity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Items'
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

module.exports = mongoose.model('GameShop', GameShopSchema)
