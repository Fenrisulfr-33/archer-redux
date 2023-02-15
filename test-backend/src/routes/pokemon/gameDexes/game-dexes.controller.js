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
    if (game === 'scarlet-violet'){
        const scviDex = await National.find().where("pokedexNumber.scvi").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.scvi": 1 });
        disconnect();
        response.status(200).json(scviDex);
    } else if (game === 'sword-shield'){
        const swshDex = await National.find().where("pokedexNumber.swsh").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
        disconnect();
        response.status(200).json(swshDex);
    } else if (game === 'isle-of-armor'){
        const ioaDex = await National.find().where("pokedexNumber.ioa").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.ioa": 1 });
        disconnect();
        response.status(200).json(ioaDex);
    } else if (game === 'crown-tundra'){
        const ctDex = await National.find().where("pokedexNumber.ct").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.ct": 1 });
        disconnect();
        response.status(200).json(ctDex);
    }
});

module.exports = {
    list: [connect, listDex]
}