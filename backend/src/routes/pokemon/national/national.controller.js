// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const National = require("../../../models/pokemon/nationalModel");
const Moves = require("../../../models/pokemon/movesModel");
const { connect, disconnect } = require("../connection");

/* ---------- Helpers ---------- */

const getPokemonMoves = (pokemonMoves, dbMoves) => {
    const returnMoves = {};
    // console.log(pokemonMoves);
    for (const [game, methodList] of Object.entries(pokemonMoves)) {
        returnMoves[game] = {};
        // console.log(`Game: ${game} - Type: ${methodList}`);
        for (const [method, list] of Object.entries(pokemonMoves[game])) {
            // console.log(`Method: ${method}`)
            // console.log(`List: ${list}`)
            if (typeof (list[0]) === typeof ({})) {
                // console.log('object')
                const returnList = list.map((move) => {
                    const foundMove = dbMoves.find((dbMove) => dbMove.name.english === move.name);
                    if (foundMove) {
                        return {
                            ...move,
                            id: foundMove._id,
                            name: foundMove.name.english,
                            type: foundMove.type,
                            category: foundMove.category,
                            pp: foundMove.pp,
                            power: foundMove.pp,
                            accuracy: foundMove.accuracy,
                            contact: foundMove.contact,
                            shortEffect: foundMove.effect?.shortEffect,
                            target: foundMove.target,
                            contest: foundMove.contest,
                            priority: foundMove.priority,
                        }
                    }
                })
                returnMoves[game][method] = returnList;
            } else {
                // Must be an array
                const returnList = list.map((move) => {
                    const foundMove = dbMoves.find((dbMove) => dbMove.name.english === move);
                    if (foundMove) {
                        return {
                            id: foundMove._id,
                            name: foundMove.name.english,
                            type: foundMove.type,
                            category: foundMove.category,
                            pp: foundMove.pp,
                            power: foundMove.pp,
                            accuracy: foundMove.accuracy,
                            contact: foundMove.contact,
                            shortEffect: foundMove.effect?.shortEffect,
                            target: foundMove.target,
                            contest: foundMove.contest,
                            priority: foundMove.priority,
                        }
                    }
                })
                returnMoves[game][method] = returnList;
            }
        }
    }
    return returnMoves;
};

const getPokemonForms = async (formsTab) => {
    const newFormsTab = formsTab.map((form) => {
    })
}

/* ---------- Middleware ---------- */
const pokemonExists = asyncHandler(async (request, response, next) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    if (!pokemon) {
        // Case for if pokemon does not exist
        response.status(400);
        throw new Error("Pokemon not found.");
    } else {
        response.locals.pokemon = pokemon;
        next();
    }
});

const getMoves = asyncHandler(async (request, response, next) => {
    // Getting all the moves right away will be faster then requesting it every time we need information
    const moves = await Moves.find().lean();
    // Working on
    // const moves = await Moves.find().select('name.english type category contest pp power accuracy contact generation target effect priority').lean();
    if (!moves) {
        // Case for if moves is not connecting
        response.status(400);
        throw new Error("Moves data not found, error on Server/Database side.");
    } else {
        response.locals.moves = moves;
        next();
    }
});

/**
 *  Finds a pokemon base upon its national dex _id,
 *  and reassigns its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
// TODO: Make this page work so when you go from a dex to that page it has the moves
const readPokemonByGame = asyncHandler(async (request, response, next) => {
    const { pokemon, moves } = response.locals,
        game = request.params.game;
    let mainGame = null;
    game === "isle-of-armor" || "crown-tundra" ? mainGame = "sword-shield" : null;

    const newMoves = mainGame
        ? getPokemonMoves(pokemon.moves, mainGame, moves)
        : getPokemonMoves(pokemon.moves, game, moves);
    pokemon.moves = newMoves;
    disconnect();
    response.status(200).json(pokemon);
});

/* ----------- CRUD Ops ----------- */

/**
 *  Finds a pokemon base upon its national dex _id ,
 *  and reassigns its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const { pokemon, moves } = response.locals;
    // Get more detailed information for each pokemon move for MoveModal.
    pokemon.moves = getPokemonMoves(pokemon.moves, moves);
    // Get pokemon forms tab data if formsTab exists.
    if (pokemon.formsTab){
        
    }

    disconnect();
    response.status(200).json(pokemon);
});
/**
 *  lists all pokemon in order of national dex _id
 *
 * @returns {JSON}
 *  The Pokemon National Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
    // Define parameters for types, and stats
    const { typeOne, typeTwo, asc, desc } = request.query
    // Create return array to avoid repetitive code
    let national = [];
    // Creates whats returned from model
    const nationalSelect = 'name.english type abilities baseStats'
    // Create sorting object for array return
    const sort = asc ? { [asc]: 1 }
        : desc ? { [desc]: -1 }
            : { _id: 1 }
    // Checks for pokemon types from parameters
    let typeStatement = null;
    // Type check else statement
    if (typeOne && typeTwo) {
        typeStatement = [
            { 'type.one': typeOne, 'type.two': typeTwo },
            { 'type.one': typeTwo, 'type.two': typeOne },
        ];
    } else if (!typeOne && typeTwo) {
        typeStatement = [{ 'type.one': typeTwo }, { 'type.two': typeTwo }];
    } else if (!typeTwo && typeOne) {
        typeStatement = [{ 'type.one': typeOne }, { 'type.two': typeOne }];
    }
    // if the typeStatement exists apply typeStatement
    if (typeStatement) {
        national = await National.find()
            .or(typeStatement)
            .select(nationalSelect)
            .sort(sort);
    } else {
        // return national dex without filters
        national = await National.find()
            .select(nationalSelect)
            .sort(sort);
    }

    disconnect();
    response.status(200).json(national);
});

const listNationalNames = asyncHandler(async (request, response) => {
    const nationalNames = await National.distinct('name.english');

    disconnect();
    response.status(200).json(nationalNames);
});

module.exports = {
    read: [connect, pokemonExists, getMoves, readPokemon],
    readGame: [connect, pokemonExists, getMoves, readPokemonByGame],
    list: [connect, listNational],
    listNames: [connect, listNationalNames],
};
