const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const National = require('../../../models/nationalModel');
/**
 *  lists all pokemon in order of sword and shield dex number
 * 
 * @returns {JSON}
 *  The base sword and shield dex
 */
const listSwShDex = asyncHandler(async (request, response) => {
    const swshDex = await National.find().where("pokedexNumber.swsh").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
    // const swshDex = await National.find({ "pokedexNumber.swsh": { $exists: true } }).select('name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
    // const swshDex = await National.find({ "pokedexNumber": { "swsh": { $exists: true } } }).select('name type abilities baseStats').sort({ "pokedexNumber": { "swsh": 1 } });
    // const swshDex = await National.find({ pokedexNumber: { swsh: { $exists: true } } }).select('name type abilities baseStats').sort({ pokedexNumber: { swsh: 1 } });
    response.status(200).json(swshDex);
});

module.exports = {
    list: [listSwShDex]
}