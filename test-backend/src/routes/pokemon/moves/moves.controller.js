const asyncHandler = require('express-async-handler');
const Moves = require('../../../models/pokemon/movesModel');
const { connect, disconnect } = require('../connection');

const moveExists = asyncHandler(async (request, response, next) => {
  const move = await Moves.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
  if (!move) {
    // Case for if move does not exsist
    response.status(400);
    throw new Error("Move not found.");
  } else {
    response.locals.move = move;
    next();
  }
});

const readMove = asyncHandler(async (request, response) => {
    const { move } = response.locals;
    disconnect();
    response.status(200).json(move);
});

const listMoves = asyncHandler(async (request, response) => {
    const moves = await Moves.find().select('name.english type category pp power accuracy').sort({ _id: 1 }); // just for the list view on the natioanl view page
    disconnect();
    response.status(200).json(moves);
});

module.exports = {
    read: [connect, moveExists, readMove],
    list: [connect, listMoves],
}