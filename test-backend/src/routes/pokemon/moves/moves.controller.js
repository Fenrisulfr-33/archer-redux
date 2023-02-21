const asyncHandler = require('express-async-handler');
const Moves = require('../../../models/pokemon/movesModel');
const { connect, disconnect } = require('../connection');

const listMoves = asyncHandler(async (request, response) => {
    const moves = await Moves.find().select('name.english type category pp power accuracy').sort({ _id: 1 }); // just for the list view on the natioanl view page
    disconnect();
    response.status(200).json(moves);
});

module.exports = {
    list: [connect, listMoves]
}