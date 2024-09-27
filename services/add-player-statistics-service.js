
'use strict'
const { logger, httpStatusCode, generateSuccessResponse} = require('../lib/utils')
const playerStats = require('../models/player-statistics')

const addPlayerStats = async (body) => {
    try {
        let response;
        response = await playerStats.insertMany(body)
        logger.debug('Inserted player statistics from service = %j',response)
        return generateSuccessResponse(response, 'players stats added successfully!')
    } catch(error) {
        logger.error('Error while inserting players stats from service= %j %s',error, error)
        return generateSuccessResponse(error, 'Error while inserting players details', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    addPlayerStats
}