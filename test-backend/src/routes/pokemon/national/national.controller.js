 // This lets use use try catch without always have to catch an error
const asyncHandler = require('express-async-handler');
const National = require('../../../models/pokemon/nationalModel');
const Moves = require('../../../models/pokemon/movesModel');
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

/* ---------- Middleware ---------- */
const pokemonExists = asyncHandler(async (request, response, next) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    if (!pokemon) {  // Case for if pokemon does not exsist
        response.status(400);
        throw new Error('Pokemon not found.');
    } else {
        response.locals.pokemon = pokemon;
        next();
    }
}), getMoves = asyncHandler(async (request, response, next) => {
    // Getting all the moves right away will be faster then requesting it everytime we need information
    // const moves = await Moves.find().lean();
    // Working on 
    const moves = await Moves.find().select('name.english type category contest pp power accuracy contact generation target effect priority').lean();
    if (!moves) { // Case for if moves is not connecting
        response.status(400);
        throw new Error('Moves data not found, error on Server/Database side.');
    } else {
        response.locals.moves = moves;
        next();
    }
});

/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemonByGame = asyncHandler(async (request, response, next) => {
    const { pokemon, moves } = response.locals;
    const game = request.params.game
    const initialMoves = {};
    for (const move in pokemon.moves) {
        if (pokemon.moves[move].hasOwnProperty(`${game}-egg`)) {
            // if intialMoves.egg exists skip else create it
            initialMoves.egg ? null : initialMoves['egg'] = [];
            // find the move in moves and add it to the egg array
            // TODO: Look at an easier way to find the move instead of this method, potientally use a mongo query
            const found = moves.find((dexMove) => dexMove.name.english === move);
            if(found._id === 80) {
                console.log(found);
            }
            initialMoves.egg.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-lvl`)) {
            initialMoves.lvl ? null : initialMoves['lvl'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move),
                rep = {
                    ...found,
                    level: pokemon.moves[move][`${game}-lvl`]
                }
                if(found._id === 80) {
                    console.log(found);
                }
            initialMoves.lvl.push(rep)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-record`)) {
            initialMoves.record ? null : initialMoves['record'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            if(found._id === 80) {
                console.log(found);
            }
            initialMoves.record.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-machine`)) {
            initialMoves.machine ? null : initialMoves['machine'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move)
            if(found._id === 80) {
                console.log(found);
            }
            initialMoves.machine.push(found);
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-tutor`)) {
            initialMoves.tutor ? null : initialMoves['tutor'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            if(found._id === 80) {
                console.log(found);
            }
            initialMoves.tutor.push(found);
        }
    }
    pokemon.moves = initialMoves;
    disconnect();
    response.status(200).json(pokemon);
});
/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information

 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const { pokemon, moves } = response.locals;
    const game = 'sword-shield'
    const initialMoves = {};
    for (const move in pokemon.moves) {
        if (pokemon.moves[move].hasOwnProperty(`${game}-egg`)) {
            initialMoves.egg ? null : initialMoves['egg'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            initialMoves.egg.push(found)
        }
        if (pokemon.moves[move].hasOwnProperty(`${game}-lvl`)) {
            initialMoves.lvl ? null : initialMoves['lvl'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move),
                rep = {
                    ...found,
                    level: pokemon.moves[move][`${game}-lvl`]
                }
            initialMoves.lvl.push(rep)
        }
        if (pokemon.moves[move].hasOwnProperty(`${game}-record`)) {
            initialMoves.record ? null : initialMoves['record'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            initialMoves.record.push(found)
        }
        if (pokemon.moves[move].hasOwnProperty(`${game}-machine`)) {
            initialMoves.machine ? null : initialMoves['machine'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            initialMoves.machine.push(found);
        }
        if (pokemon.moves[move].hasOwnProperty(`${game}-tutor`)) {
            initialMoves.tutor ? null : initialMoves['tutor'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            initialMoves.tutor.push(found);
        }
    }
    pokemon.moves = initialMoves;
    // const pokemonWithMoves = await _getMoves(pokemon, 'sword-shield', moves);
    /*
        Time Complexity: O(n) - The only way the algorithm takes longer is if the pokemon moves are added or games
    */
    disconnect();
    response.status(200).json(pokemon);
});
/**
 *  lists all pokemon in order of national dex _id
 * 
 * @returns {JSON}
 *  The Pokemon Natioanl Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
    const national = await National.find().select('name type abilities baseStats').sort({ _id: 1 }); // just for the list view on the natioanl view page
    disconnect();
    response.status(200).json(national);
});

module.exports = {
    read: [connect, pokemonExists, getMoves, readPokemon],
    readGame: [connect, pokemonExists, getMoves, readPokemonByGame],
    list: [connect, listNational]
}