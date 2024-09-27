'use strict'

const addPlace = require('./add-place-details-routes')
const addInnings = require('./add-innings-routes')
const addPlayerStats = require('./add-player-statistics-route')
const addCountries = require('./add-country-routes')
module.exports = function (app) {
    app.use('/api/v1/add', addPlace)
    app.use('/api/v1/add', addInnings)
    app.use('/api/v1/add', addPlayerStats)
    app.use('/api/v1/add', addCountries)
}