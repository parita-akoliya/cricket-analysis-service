const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const playerPerformanceSchema = new mongoose.Schema({
    player_id: {
        type: Number,
        unique: true,
        required: true,
    },
    match_id: {
        type: Schema.ObjectId,
        ref: 'Match'
    },
    player_id: {
        type: Schema.ObjectId,
        ref: 'PlayerStatistics'
    },
    run: {
        type: Number,
        required: false,
        unique: false,
    },
    wickets: {
        type: Number,
        required: false,
        unique: false,
    },
    average_run: {
        type: Number,
        required: false,
        unique: false,
    },
    average_wicket: {
        type: Number,
        required: false,
        unique: false,
    },
    catches: {
        type: Number,
        required: false,
        unique: false,
    },
    strike_rate: {
        type: Number,
        required: false,
        unique: false,
    },
    batting_order: {
        type: Number,
        required: false,
        unique: false
    }
}, {
    collection: 'player_performance'
})
playerPerformanceSchema.plugin(autoIncrement, {
    model: 'player_performance',
    field: 'player_id',
    startAt: 1
})

module.exports = mongoose.model('player_performance', playerPerformanceSchema)