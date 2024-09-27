'use strict'
const { logger, httpStatusCode, generateSuccessResponse } = require('../lib/utils')
const placeDetails = require('../models/place-details')

const addPlace = async (body) => {

    try {
        let response;
        response = await placeDetails.insertMany(body)
        logger.debug('Inserted place details from service= %j', response)
        return generateSuccessResponse(response, 'place added successfully!')
    } catch (error) {
        logger.error('Error while insering place details from service= %j %s', error, error)
        return generateSuccessResponse(error, 'Error while inserting place details', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    addPlace
}