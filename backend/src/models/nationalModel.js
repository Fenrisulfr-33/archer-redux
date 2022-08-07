const mongoose = require('mongoose');

const nationalSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Please add a text value']
    }
});

module.exports = mongoose.model('National', nationalSchema, 'national_dex');