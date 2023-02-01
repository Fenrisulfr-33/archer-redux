 // This lets use use try catch without always have to catch an error
const asyncHandler = require('express-async-handler');
const National = require('../../../models/pokemon/nationalModel');
const mongoose = require('mongoose');
const { connect, disconnect } = require('../connection');
const local = process.env.ENV === 'local' ? true : false;
const localNational = require('../mockData/pokedex.json');
/**
 *  lists all pokemon in order of sword and shield dex number
 * 
 * @returns {JSON}
 *  The base sword and shield dex
 */
const listSwShDex = asyncHandler(async (request, response) => {
    if (local) {
        const national = localNational.filter((pokemon) => pokemon.pokedexNumber.swsh), 
        nationalSorted = national.sort((pokemonA, pokemonB) => pokemonA.pokedexNumber.swsh - pokemonB.pokedexNumber.swsh),
        nationalMapped = nationalSorted.map((pokemon) => {
            const { _id, pokedexNumber, name, type, abilities, baseStats } = pokemon;
            return {
                _id,
                pokedexNumber,
                name: name.english,
                type,
                abilities,
                baseStats,
            }
        })
        response.status(200).json(nationalMapped);
    } else {
        const swshDex = await National.find().where("pokedexNumber.swsh").exists(true).select('pokedexNumber name type abilities baseStats').sort({ "pokedexNumber.swsh": 1 });
        disconnect();
        response.status(200).json(swshDex);
    }
});

module.exports = {
    list: [connect, listSwShDex]
}