 // This lets use use try catch without always have to catch an error
 const asyncHandler = require('express-async-handler');
 const Moves = require('../../../models/pokemon/movesModel');
 const { connect, disconnect } = require('../connection');
 const local = process.env.ENV === 'local' ? true : false;
 /**
  *  lists all pokemon in order of sword and shield dex number
  * 
  * @returns {JSON}
  *  The base sword and shield dex
  */
 const listMoves = asyncHandler(async (request, response) => {
     if (local) {

     } else {
        const moves = await Moves.find().select('name.english type category pp power accuracy').sort({ _id: 1 }); // just for the list view on the natioanl view page
         disconnect();
         response.status(200).json(moves);
     }
 });
 
 module.exports = {
     list: [connect, listMoves]
 }