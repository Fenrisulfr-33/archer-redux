const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonTeamMemberSchema = new Schema({
    name: String,
    ability: String,
    nature: String,
    item: String,
    evs: {
        hp: Number,
        atk: Number,
        def: Number,
        spatk: Number,
        spdef: Number,
        spd: Number
    },
    moves: {
        one: String,
        two: String,
        tre: String,
        four: String
    },
    desc: String
}, {timestamps: true});

module.exports = mongoose.model('pokemonTeamMember', pokemonTeamMemberSchema);