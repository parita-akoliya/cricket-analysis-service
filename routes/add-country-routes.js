'use strict'

const express = require('express')
const routes = express.Router()
const addCountryController = require('../controllers/add-country-controller')

routes.post('/country', addCountryController.addCountry)

module.exports = routes