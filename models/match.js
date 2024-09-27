const mongoose = require('mongoose')
const {autoIncrement} = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const matchSchema = new mongoose.Schema({
    match_id : {
        type : Number,
        required : true,
        unique : true
    },
    place_id : {
        type : Schema.ObjectId,
        ref : 'PlaceDetails',
        required : true
    },
    innning_id : {
        type : Schema.ObjectId,
        ref : 'Innings',
        value : [],
        required : true
    }
}, {
    collection : 'match'
})

matchSchema.plugin(autoIncrement, {
    model : 'match',
    field : 'match_id',
    startAt : 1
})

module.exports = mongoose.model('match',matchSchema)