const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
const io = require('socket.io')
const http = require('http')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.express.use(cors())
    this.server = http.Server(this.express)

    this.socket()
    this.database()
    this.middlewares()
    this.routes()
  }
  socket () {
    this.io = io(this.server)

    this.io.on('connection', socket => {
      // eslint-disable-next-line camelcase
      const { user_id } = socket.handshake.query

      this.connectedUsers[user_id] = socket.id

      socket.on('disconnect', () => {
        delete this.connectedUsers[user_id]
      })
    })
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  middlewares () {
    this.express.use(express.json())
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().server
