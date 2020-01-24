const Game = require('../models/Game')
const GameShop = require('../models/GameShop')

class GameController {
  async index (req, res) {
    const game = await Game.find({})

    return res.json(game)
  }

  async show (req, res) {
    const game = await Game.findOne({ user: req.params.id })
    const shop = await GameShop.findOne({ user: req.params.id }).populate('quantity')

    return res.json({ game, shop })
  }

  async update (req, res) {
    const { ...data } = req.body
    let game = await Game.findOne({ user: req.userId })

    game.coins = data.coins
    game.coins_per_second = data.coins_per_second
    game.save()

    return res.json({ game })
  }
}

module.exports = new GameController()
