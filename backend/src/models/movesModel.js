const mongoose = require('mongoose');

const movesSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Please add a _id']
    }
});

module.exports = mongoose.model('Moves', movesSchema, 'moves');