const Items = require('../models/Items')
const Game = require('../models/Game')
const getShopItems = require('../util/shopItems')

class GameController {
  async update (req, res) {
    const { id, item, quantity } = req.body

    const game = await Game.findOne({ user: req.userId })
    const items = await Items.findById(id)

    const shopItems = getShopItems()
    const necessaryCoins = shopItems[item].value + (items[item] * shopItems[item].price_per_buy)

    if (game.coins >= necessaryCoins) {
      game.coins = game.coins - necessaryCoins
      items[item] = items[item] + quantity

      items.save()
      game.save()

      return res.json({ items })
    }
    return res.json({ error: 'You dont have necessary coins' })
  }
}

module.exports = new GameController()
