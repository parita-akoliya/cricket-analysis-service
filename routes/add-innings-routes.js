'use strict'

const express = require('express')
const routes = express.Router()
const addInningsController = require('../controllers/add-innings-controller')

routes.post('/innings', addInningsController.addInnings)

module.exports = routes