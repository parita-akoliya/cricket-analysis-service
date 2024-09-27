const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)

const placeSchema = new mongoose.Schema({
    place_id: {
        type: Number,
        unique: true,
        required: true
    },
    ground_name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
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
},{
    collection: 'place_details'
})

placeSchema.plugin(autoIncrement, {
    model: 'place_details',
    field: 'place_id',
    startAt: 1
})

module.exports = mongoose.model('place_details', placeSchema)