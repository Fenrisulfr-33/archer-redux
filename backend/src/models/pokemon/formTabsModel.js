const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const formTabsSchema = Schema({
    pokemonIds: [Number],
    key: { type: String },
    tab: { type: Array }
});

module.exports = model('FormTabs', formTabsSchema, 'form-tabs');