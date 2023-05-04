const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonBuildSchema = new Schema({
    pokemonId: {
        type: Number,
        required: [true, 'Please add a _id']
    },
    userId: {
        type: Number,
        required: [true, 'please add a user']
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    type: {
        type: Array,
        required: [true, 'Please add a type']
    },
    ability: {
        type: String,
        required: [true, 'Please add a ability']
    },
    nature: {
        type: String,
        required: [true, 'Please add a nature']
    },
    item: {
        type: String,
        required: [true, 'Please add a item']
    },
    teraType: {
        type: String,
        required: [true, 'Please add a terraType']
    },
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
    notes: String
}, {timestamps: true});

module.exports = mongoose.model('pokemonBuild', pokemonBuildSchema);