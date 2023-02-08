 // This lets use use try catch without always have to catch an error
const asyncHandler = require('express-async-handler');
const National = require('../../../models/pokemon/nationalModel');
const { connect, disconnect } = require('../connection');
/**
 *  lists all pokemon in order of sword and shield dex number
 * 
 * @returns {JSON}
 *  The base sword and shield dex
 */
const listDex = asyncHandler(async (request, response) => {
    const { game } = request.params;
    if (game === 'sword-shield'){
        const swshDex = await National.find().where("pokedexNumber.swsh").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
        disconnect();
        response.status(200).json(swshDex);
    }
});

module.exports = {
    list: [connect, listDex]
}