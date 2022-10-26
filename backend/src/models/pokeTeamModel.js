const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PokemonTeamMember = require('../models/pokemonTeamMemberModel').schema

const pokemonTeamSchema = new Schema({
    teamName: '',
    team: [ PokemonTeamMember ],
}, {timestamps: true}, {versionKey: false});

module.exports = mongoose.model('pokemonTeam', pokemonTeamSchema);