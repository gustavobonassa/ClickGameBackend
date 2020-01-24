const User = require('../models/User')
const GameShop = require('../models/GameShop')
const Items = require('../models/Items')
const Game = require('../models/Game')

class UserController {
  async index (req, res) {
    const users = await User.find({})

    return res.json(users)
  }

  async show (req, res) {
    const user = await User.findById(req.params.id)

    return res.json(user)
  }

  async store (req, res, next) {
    const { email, name } = req.body

    try {
      if (await User.findOne({ $or: [{ email }, { name }] })) { return res.status(400).send({ error: 'User already exists' }) }

      const user = await User.create(req.body)

      user.password = undefined

      const items = await Items.create({})
      const findGameShop = await GameShop.create({ user: user._id, quantity: items._id })
      await Game.create({ user: user._id })

      await GameShop.findOne(findGameShop._id).populate('quantity')

      return res.send({
        gameId:
        user,
        token: User.generateToken(user)
      })
    } catch (err) {
      return res.status(400).send({ error: 'Registration failed' })
    }
  }

  async update (req, res) {
    const { password, ...data } = req.body

    const user = await User.findByIdAndUpdate(req.params.id, data, {
      new: true
    })

    if (password) {
      user.password = password

      await user.save()
    }

    return res.json(user)
  }

  async destroy (req, res) {
    await User.findByIdAndRemove(req.params.id)

    return res.send()
  }
}

module.exports = new UserController()
