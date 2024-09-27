'use strict'

const express = require('express')
const routes = express.Router()
const addPlaceController = require('../controllers/add-place-details-controller')

routes.post('/place', addPlaceController.addPlace)

module.exports = routes