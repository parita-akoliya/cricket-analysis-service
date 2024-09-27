'use strict'
const addInningsService = require('../services/add-innings-service')
const { httpStatusCode, generateSendErrorResponse} = require('../lib/utils')

const addInnings = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await addInningsService.addInnings(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting place data'))
    }
}

module.exports = {
    addInnings
}