 // This lets use use try catch without always have to catch an error
const asyncHandler = require('express-async-handler');
const National = require('../../../models/pokemon/nationalModel');
const Moves = require('../../../models/pokemon/movesModel');
const mongoose = require('mongoose');
const { connect, disconnect } = require('../connection');
const local = process.env.ENV === 'local' ? true : false;
const localNational = require('../mockData/pokedex.json');
const localMoves = require('../mockData/moves.json');
/* ---------- Helpers ---------- */
const getPokemonMoves = (pokemon, game, moves) => {
    const pokemonMoves = {};
    for (const move in pokemon.moves) {
        if (pokemon.moves[move].hasOwnProperty(`${game}-egg`)) {
            // if intialMoves.egg exists skip else create it
            pokemonMoves.egg ? null : pokemonMoves['egg'] = [];
            // find the move in moves and add it to the egg array
            // TODO: Look at an easier way to find the move instead of this method, potientally use a mongo query
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.egg.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-lvl`)) {
            pokemonMoves.lvl ? null : pokemonMoves['lvl'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move),
                rep = {
                    ...found,
                    level: pokemon.moves[move][`${game}-lvl`]
                }
                pokemonMoves.lvl.push(rep)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-record`)) {
            pokemonMoves.record ? null : pokemonMoves['record'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.record.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-machine`)) {
            pokemonMoves.machine ? null : pokemonMoves['machine'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move)
            pokemonMoves.machine.push(found);
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-tutor`)) {
            pokemonMoves.tutor ? null : pokemonMoves['tutor'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.tutor.push(found);
        }
    }
    return pokemonMoves;
}
/* ---------- Middleware ---------- */
const pokemonExists = asyncHandler(async (request, response, next) => {
    if (local) {
        const pokemon = localNational.find((pokemon) => pokemon._id === Number(request.params.id));
        response.locals.pokemon = pokemon;
        next();
    } else {
        const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
        if (!pokemon) {  // Case for if pokemon does not exsist
            response.status(400);
            throw new Error('Pokemon not found.');
        } else {
            response.locals.pokemon = pokemon;
            next();
        }
    }
}), getMoves = asyncHandler(async (request, response, next) => {
    if (local) {
        response.locals.moves = localMoves;
        next();
    } else {
        // Getting all the moves right away will be faster then requesting it everytime we need information
        const moves = await Moves.find().lean();
        // Working on 
        // const moves = await Moves.find().select('name.english type category contest pp power accuracy contact generation target effect priority').lean();
        if (!moves) { // Case for if moves is not connecting
            response.status(400);
            throw new Error('Moves data not found, error on Server/Database side.');
        } else {
            response.locals.moves = moves;
            next();
        }
    }
});

/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemonByGame = asyncHandler(async (request, response, next) => {
    const { pokemon, moves } = response.locals, game = request.params.game;
    if (local) {
        const responsePokemon = {
            ...pokemon,
            moves: getPokemonMoves(pokemon, game, localMoves),
        };
        response.status(200).json(responsePokemon);
    } else {
        pokemon.moves = getPokemonMoves(pokemon, game, moves);
        disconnect();
        response.status(200).json(pokemon);
    }
});
/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information

 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const { pokemon, moves } = response.locals, game = 'sword-shield';
    if (local) {
        pokemon.moves = getPokemonMoves(pokemon, game, localMoves);
        response.status(200).json(pokemon);
    } else {
        pokemon.moves = getPokemonMoves(pokemon, game, moves);
        disconnect();
        response.status(200).json(pokemon);
    }
});
/**
 *  lists all pokemon in order of national dex _id
 * 
 * @returns {JSON}
 *  The Pokemon Natioanl Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
    if (local){
        const national = localNational.map(({_id, name, type, abilities, baseStats}) => {
            return {
                _id,
                name: name.english,
                type,
                abilities,
                baseStats,
            }
        })
        response.status(200).json(national);
    } else {
        const national = await National.find().select('name.english type abilities baseStats').sort({ _id: 1 }); // just for the list view on the natioanl view page
        disconnect();
        response.status(200).json(national);
    }
});

module.exports = {
    read: [connect, pokemonExists, getMoves, readPokemon],
    readGame: [connect, pokemonExists, getMoves, readPokemonByGame],
    list: [connect, listNational]
}