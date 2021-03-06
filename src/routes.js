const express = require('express')

const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')

const routes = express.Router()

routes.get('/users', controllers.UserController.index)
routes.get('/users/:id', controllers.UserController.show)
routes.post('/users', controllers.UserController.store)
routes.put('/users/:id', controllers.UserController.update)
routes.delete('/users/:id', controllers.UserController.destroy)

routes.post('/sessions', controllers.SessionController.store)

routes.get('/game', controllers.GameController.index)
routes.get('/game/:id', controllers.GameController.show)

routes.use(authMiddleware)

routes.put('/shop', controllers.ShopController.update)
routes.put('/game', controllers.GameController.update)

// routes.post('/game', controllers.GameController.store)

module.exports = routes
