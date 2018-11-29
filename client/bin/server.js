const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')
const path = require('path')

const express = require('express')
const app = express()

const port = config.server_port

server.listen(port)
debug(`Server is now running at http://localhost:${port}.`)





