const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const playerStatisticsSchema = new mongoose.Schema({
    player_stat_id : {
        type: Number,
        unique: true,
        required: true,
    },
    player_name : {
        type: String,
        required: true,
    },
    player_country : {
        type: String,
        required: true,
    },
    player_runs : {
        type: Number,
        required: false,
    },
    player_wickets : {
        type: Number,
        required: false,
    },
    player_average : {
        type: Number,
        required: false,
    },
    player_catch : {
        type : Number,
        required : false,
    },
    player_centuries : {
        type : Number,
        required: false,
    }
},{
    collection : 'player_statistics'
})
playerStatisticsSchema.plugin(autoIncrement, {
    model : 'player_statistics',
    field : 'player_stat_id',
    startAt: 1
})

module.exports = mongoose.model('player_statistics', playerStatisticsSchema)


