const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please make a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please make a password']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);