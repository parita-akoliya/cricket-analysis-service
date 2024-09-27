'use strict'

const {logger, httpStatusCode, generateSuccessResponse} = require('../lib/utils')
const country = require('../models/country')

const addcountries = async(body) => {
    try {
        let response;
        response = await country.insertMany(body)
        logger.debug('Inserted country from service = %j',response)
        return generateSuccessResponse(response, 'country added succesfully')
    } catch(error) {
        logger.eroor('Error while inserting country details from service = %j', error, error)
        return generateSuccessResponse(error, 'Error while inserting country', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}



module.exports = {
    addcountries
}