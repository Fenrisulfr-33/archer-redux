const mongoose = require('mongoose');

const movesSchema = mongoose.Schema({
    _id: {
        type: Number
    }
});

module.exports = mongoose.model('Moves', movesSchema, 'moves');