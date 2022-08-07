const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const National = require('../../../models/nationalModel');
const Moves = require('../../../models/movesModel');

/* ------- Middleware Functions -------- */

/* ---------- CRUDL Functions ---------- */

/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information

 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    const moves = await Moves.find().lean(); // Getting all the moves right away will be faster then requesting it everytime we need information
   
    if (!pokemon) {  // Case for if pokemon does not exsist
        response.status(400);
        throw new Error('Pokemon not found.');
    } else if(!moves) { // Case for if moves is not connecting
        /* 
            Eventually make this not required as you should still be able to get pokemon data without connecting to moves
            But for now, I want it this way.
        */
        response.status(400);
        throw new Error('Moves data not found, error on Server/Database side.');
    } else {
        /*
            Moves Hierachy inside Pokemon object

            --------------
            <Move Name>: {
                <game><move type>: <move type>
            },
            <Move Name>: {
                <game><move type>: <move type>
            }
        */
       const initialMoves = {
           lvl: [],
           egg: [],
           record: [],
           machine: [],
           tutor: [],
       };
        for (const move in pokemon.moves) {
            if (pokemon.moves[move].hasOwnProperty('sword-shield-egg')) {
                const found = moves.find((dexMove) => dexMove.name.english === move); 
                initialMoves.egg.push(found)
            }
            if (pokemon.moves[move].hasOwnProperty('sword-shield-lvl')) {
                const found = moves.find((dexMove) => dexMove.name.english === move); 
                const rep = {
                    ...found,
                    level: pokemon.moves[move]['sword-shield-lvl']
                }
                initialMoves.lvl.push(rep)
            }
            if (pokemon.moves[move].hasOwnProperty('sword-shield-record')) {
                const found = moves.find((dexMove) => dexMove.name.english === move); 
                initialMoves.record.push(found)
            }
            if (pokemon.moves[move].hasOwnProperty('sword-shield-machine')) {
                const found = moves.find((dexMove) => dexMove.name.english === move); 
                initialMoves.machine.push(found);
            }
            if (pokemon.moves[move].hasOwnProperty('sword-shield-tutor')) {
                const found = moves.find((dexMove) => dexMove.name.english === move); 
                initialMoves.tutor.push(found);
            }
        }
        pokemon.moves = initialMoves;
        /*
            Time Complexity: O(n) - The only way the algorithm takes longer is if the pokemon moves are added or games
        */
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
    const national = await National.find().select('name type abilities baseStats').sort({_id: 1}); // just for the list view on the natioanl view page
    // const national = await National.find().lean().sort({_id: 1});
    response.status(200).json(national);
});

module.exports = {
    read: [readPokemon],
    list: [listNational]
}