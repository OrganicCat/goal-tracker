express = require 'express'

module.exports.startServer = ->
  app = express()
  app.use express.static __dirname + '/public'
  app.use express.static __dirname + '/bower_components'
  app.use express.static __dirname + '/app'

  server = app.listen 3000, ->
    host = server.address().address
    port = server.address().port
    console.log 'Takin care of business'

  app