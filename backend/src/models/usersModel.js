const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PokemonTeam = require('../models/pokeTeamModel').schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please make a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please make a password']
    },
    pokemonTeams: [ PokemonTeam ]
}, {timestamps: true}, {versionKey: false});

module.exports = mongoose.model('User', userSchema);