const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const scoreCardSchema = new mongoose.Schema({
    score_id = {
        type: Number,
        unique: true,
        required: true,
    },
    team_1 = {
        type: Char,
        required: false,
        unique: false,
    },
    team_2 = {
        type: Char,
        required: false,
        unique: false,
    },
    winner_team = {
        type: Char,
        required: false,
        unique: false,
    },
    looser_team = {
        type: Char,
        required: false,
        unique: false,
    },
    first_batting_team = {
        type: Char,
        required: false,
        unique: false,
    },
    first_bowling_team = {
        type: Char,
        required: false,
        unique: false,
    },
    match_date = {
        type: Date,
        required: false,
        unique: false,
    },
    result_margin = {
        type: Char,
        required: false,
        unique: false,
    }
}, {
    collection: 'score_card'
})

scoreCardSchema.plugin(autoIncrement, {
    model: 'score_card',
    field: 'score_id',
    startAt: 1
})

module.exports = mongoose.model('score_card', scoreCardSchema)