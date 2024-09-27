'use strict'

const express = require('express')
const routes = express.Router()
const addPlayerStatisticsController = require('../controllers/add-player-statistics-controller')

routes.post('/playerstat', addPlayerStatisticsController.addPlayerStats)

module.exports = routes