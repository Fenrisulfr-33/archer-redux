const mongoose = require('mongoose');

const swshCompSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    ability: {
        type: String,
        required: [true, 'Please add a ability']
    },
    moveOne: {
        type: String,
        required: [true, 'Please add a first move']
    },
    moveTwo: {
        type: String,
        required: [true, 'Please add a second move']
    },
    moveThree: {
        type: String,
        required: [true, 'Please add a third move']
    },
    moveFour: {
        type: String,
        required: [true, 'Please add a fourth move']
    },
    item: {
        type: String,
        required: [true, 'Please add a item even if its not important to the build']
    },
    nature: {
        type: String,
        required: [true, 'Please add a nature']
    },
    hpEV: {
        type: Number,
        required: [true, 'Please add a Hp EV 0-252']
    },
    atkEV: {
        type: Number,
        required: [true, 'Please add a Atk EV 0-252']
    },
    defEV: {
        type: Number,
        required: [true, 'Please add a Def EV 0-252']
    },
    spAtkEV: {
        type: Number,
        required: [true, 'Please add a spAtk EV 0-252']
    },
    spDefEV: {
        type: Number,
        required: [true, 'Please add a spDef EV 0-252']
    },
    spdEV: {
        type: Number,
        required: [true, 'Please add a Spd EV 0-252']
    },
    briefDesc: {
        type: String,
        required: [true, 'Please add a small description']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

const swshCount = mongoose.Schema({
    
})

module.exports = mongoose.model('SwShComp', swshCompSchema, 'swsh_comp');