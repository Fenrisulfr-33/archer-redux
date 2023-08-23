const mongoose = require('mongoose');

const nationalSchema = mongoose.Schema({
    _id: { type: Number },
    pokedexNumber: { type: Object },
    name: { type: Object },
    type: {
        one: String,
        two: String,
    },
    moves: { type: Object },
});

module.exports = mongoose.model('National', nationalSchema, 'national-dex');