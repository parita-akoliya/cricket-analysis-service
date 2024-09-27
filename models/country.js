const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const countrySchema = new mongoose.Schema({
    country_id: {
        type: Number,
        unique: true,
        required: true
    },
    total_odi_match: {
        type: Number,
        required: false
    },
    total_odi_win: {
        type: Number,
        required: false
    },
    total_odi_loose: {
        type: Number,
        required: false
    },
    total_test_odi: {
        type: Number,
        required: false
    },
    total_test_match: {
        type: Number,
        required: false
    },
    total_test_win: {
        type: Number,
        required: false
    },
    total_test_loose: {
        type: Number,
        required: false
    },
    total_noresult_test: {
        type: Number,
        required: false
    },
    highest_odi_run: {
        type: Number,
        required: false
    },
    highest_test_run: {
        type: Number,
        required: false
    },
    lowest_test_run: {
        type: Number,
        required: false
    },
    lowest_odi_run: {
        type: Number,
        required: false
    },
    updated_on: {
        type: String,
        required: false,
        unique: false
    },
    created_on: {
        type: String,
        required: false,
        unique: false
    }
},
{
    collection: 'country'
})
countrySchema.plugin(autoIncrement, {
    model: 'country',
    field: 'country_id',
    startAt: 1
})
module.exports = mongoose.model('country', countrySchema)
