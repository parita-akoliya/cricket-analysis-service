'use strict'
const addPlaceService = require('../services/add-place-service')
const { httpStatusCode, generateSendErrorResponse} = require('../lib/utils')

const addPlace = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await addPlaceService.addPlace(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting place data'))
    }
}

module.exports = {
    addPlace
}