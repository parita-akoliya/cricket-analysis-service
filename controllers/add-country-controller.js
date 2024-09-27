'use strict'

const addCountryService = require('../services/add-country-service')
const { httpStatusCode, generateSendErrorResponse} = require('../lib/utils')

const addCountry = async(req,res) => {
    try {
        let response = null
        if(req.body) {
        response = await addCountryService.addcountries(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch(error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error,'Error while inserting country data'))
    }
}

module.exports = {
    addCountry
}