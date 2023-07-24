// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const National = require("../../../models/pokemon/nationalModel");
const Moves = require("../../../models/pokemon/movesModel");
const { connect, disconnect } = require("../connection");

/* ---------- Helpers ---------- */
const getPokemonMoves = (inMoves, searchGame, moves) => {
    const pokemonMoves = {};
    if (inMoves[searchGame]) {
        const foundGame = inMoves[searchGame];
        for (const [key, value] of Object.entries(foundGame)) {
            pokemonMoves[key] = [];
            inMoves[searchGame][key].forEach((rawMove) => {
                if (key === "level-up") {
                    const found = moves.find(
                        (dexMove) => dexMove.name.english === rawMove.name
                    );
                    if (found) {
                        pokemonMoves[key].push({
                            name: found.name.english,
                            level: rawMove.lvl,
                            type: found.type,
                            category: found.category,
                            pp: found.pp,
                            power: found.pp,
                            accuracy: found.accuracy,
                            contact: found.contact,
                            shortEffect: found.effect?.shortEffect,
                            priority: found.priority,
                        });
                    }
                } else {
                    const found = moves.find(
                        (dexMove) => dexMove.name.english === rawMove
                    );
                    if (found) {
                        pokemonMoves[key].push({
                            name: found.name.english,
                            type: found.type,
                            category: found.category,
                            pp: found.pp,
                            power: found.pp,
                            accuracy: found.accuracy,
                            contact: found.contact,
                            shortEffect: found.effect?.shortEffect,
                            priority: found.priority,
                        });
                    }
                }
            });
        }
    }
    return pokemonMoves;
};

/* ---------- Middleware ---------- */
const pokemonExists = asyncHandler(async (request, response, next) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    if (!pokemon) {
        // Case for if pokemon does not exsist
        response.status(400);
        throw new Error("Pokemon not found.");
    } else {
        response.locals.pokemon = pokemon;
        next();
    }
}),
    getMoves = asyncHandler(async (request, response, next) => {
        // Getting all the moves right away will be faster then requesting it everytime we need information
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
 *  Finds a pokemon base upon its nationa dex _id,
 *  and reassgins its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemonByGame = asyncHandler(async (request, response, next) => {
    const { pokemon, moves } = response.locals,
        game = request.params.game;
    let mainGame = null;
    if (
        game === "isle-of-armor" ||
        game === "crown-tundra" ||
        game === "swsh-other"
    ) {
        mainGame = "sword-shield";
    }
    const newMoves = mainGame
        ? getPokemonMoves(pokemon.moves, mainGame, moves)
        : getPokemonMoves(pokemon.moves, game, moves);
    pokemon.moves = newMoves;
    disconnect();
    response.status(200).json(pokemon);
});

const getMovesTest = asyncHandler(async (request, response, next) => {
    const { pokemon, moves } = response.locals,
        game = request.params.game;

    const newMoves = getPokemonMoves(pokemon.moves, game, moves);
    disconnect();
    response.status(200).json(newMoves);
});

/* ----------- CRUD Ops ----------- */

/**
 *  Finds a pokemon base upon its nationa dex _id ,
 *  and reassgins its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const { pokemon, moves } = response.locals,
        game = "scarlet-violet";
    pokemon.moves = getPokemonMoves(pokemon.moves, game, moves);
    // pokemon.baseStats = getBaseStatsWidth(pokemon.baseStats);
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
    // Define parammeters for types, and stats
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
    let typeStatment = null;
    // Type check else statment
    if (typeOne && typeTwo) {
        typeStatment = [
            { 'type.one': typeOne, 'type.two': typeTwo },
            { 'type.one': typeTwo, 'type.two': typeOne },
        ];
    } else if (!typeOne && typeTwo) {
        typeStatment = [{ 'type.one': typeTwo }, { 'type.two': typeTwo }];
    } else if (!typeTwo && typeOne) {
        typeStatment = [{ 'type.one': typeOne }, { 'type.two': typeOne }];
    }
    // if the typeStatement exists apply typeStatement
    if (typeStatment) {
        national = await National.find()
            .or(typeStatment)
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

module.exports = {
    read: [connect, pokemonExists, getMoves, readPokemon],
    readGame: [connect, pokemonExists, getMoves, readPokemonByGame],
    list: [connect, listNational],
    test: [connect, pokemonExists, getMoves, getMovesTest]
};
