 // This lets use use try catch without always have to catch an error
 const asyncHandler = require('express-async-handler');
 const National = require('../../../models/pokemon/nationalModel');
 const mongoose = require('mongoose');
 const { connect, disconnect } = require('../connection');

 const readPokemon = asyncHandler(async (request, response) => {
    console.log(request.query);
    // Shadow Punch
    // Spite
    // Curse
    // Hex
    const {move1, move2, move3, move4} = request.query;
    const moveQuery = `moves.${move1}`;
    // const found = await National.find({ "name.english": "Gengar" });
    const found = await National
    // .find()
    .find()
    .where(`moves.${move1}`)
    .exists(true)
    .where(`moves.${move2}`)
    .exists(true)
    .where(`moves.${move3}`)
    .exists(true)
    .where(`moves.${move4}`)
    .exists(true)
    .select('name.english')
    .sort({ _id: 1 });
    disconnect();
    response.status(200).json(found);
 });
 
 module.exports = {
     read: [connect, readPokemon]
 }