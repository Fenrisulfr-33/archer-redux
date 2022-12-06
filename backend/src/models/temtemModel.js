const mongoose = require('mongoose');

const temdexSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Please add a dex value']
    }
});

module.exports = mongoose.model('TemDex', temdexSchema, 'tem_tem');