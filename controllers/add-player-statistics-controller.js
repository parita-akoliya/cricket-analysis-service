
'use strict'
const addPlayerStatService = require('../services/add-player-statistics-service')
const {httpStatusCode, generateSendErrorResponse} = require('../lib/utils')

const addPlayerStats = async(req, res) => {
    try{
        let response = null
        if(req.body) {
            response = await addPlayerStatService.addPlayerStats(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting player statistics data'))
    }
}

module.exports = {
    addPlayerStats
}