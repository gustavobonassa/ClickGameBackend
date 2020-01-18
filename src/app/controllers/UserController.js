const User = require('../models/User')

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

      return res.send({
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
