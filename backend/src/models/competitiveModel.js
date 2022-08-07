const mongoose = require('mongoose');

const competitiveModel = mongoose.Schema({
    _id: {
        type: Number,
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
    }

});

module.exports = mongoose.model('Competitive', competitiveModel, 'bdsp_battle_tower');