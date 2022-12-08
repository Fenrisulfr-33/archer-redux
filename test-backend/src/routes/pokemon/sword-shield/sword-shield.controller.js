 // This lets use use try catch without always have to catch an error
const asyncHandler = require('express-async-handler');
const National = require('../../../models/pokemon/nationalModel');
const mongoose = require('mongoose');
// Connection process
const connect = asyncHandler(async (request, response, next) => {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(process.env.POKEMON_DB_CONNECTION);
    console.log(`Mongo Connected: ${db.connection.host}`.cyan.underline);
    next();
});
const disconnect = asyncHandler(async (request, response, next) => {
    await mongoose.connection.close();
    console.log(`Mongo Disconnected: ${mongoose.connection.host}`.blue.underline);
}); 
/**
 *  lists all pokemon in order of sword and shield dex number
 * 
 * @returns {JSON}
 *  The base sword and shield dex
 */
const listSwShDex = asyncHandler(async (request, response) => {
    const swshDex = await National.find().where("pokedexNumber.swsh").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
    disconnect();
    response.status(200).json(swshDex);
});

module.exports = {
    list: [connect, listSwShDex]
}