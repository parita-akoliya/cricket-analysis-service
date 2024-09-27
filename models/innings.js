const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const inningsSchema = new mongoose.Schema({
    innings_id: {
        type: Number,
        unique: true,
        required: true
    },
    score_id: {
        type: Schema.ObjectId,
        ref: 'ScoreCard',
        required: false
    },
    batting_team: {
        type: String,
        required: false
    },
    bowling_team: {
        type: String,
        required: false
    },
    runs: {
        type: Number,
        required: false
    },
    wickets: {
        type: Number,
        required: false
    },
    batting_players: [{
        type: String,
        required: false
    }],
    bowling_players: [{
        type: String,
        required: false
    }],
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
}, {
    collection: 'innings'
})

inningsSchema.plugin(autoIncrement, {
    model: 'innings',
    field: 'innings_id',
    startAt: 1
})

module.exports = mongoose.model('innings', inningsSchema)