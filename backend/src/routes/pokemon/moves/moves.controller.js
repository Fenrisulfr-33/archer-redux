const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const National = require('../../../models/nationalModel');
const Moves = require('../../../models/movesModel');

const readMove = asyncHandler(async (request, response) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    const moves = await Moves.find().lean(); // Getting all the moves right away will be faster then requesting it everytime we need information
        response.status(200).json(pokemon);
});

const listMoves = asyncHandler(async (request, response) => {
    const moves = await Moves.find().select('name.english type category accuracy pp effect.shortEffect priority').lean().sort({ _id: 1 });
    response.status(200).json(moves);
});

module.exports = {
    read: [readMove],
    list: [listMoves]
}