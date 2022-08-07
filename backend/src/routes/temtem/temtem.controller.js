const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const TemDex = require('../../../models/nationalModel');

/* ------- Middleware Functions -------- */

/* ---------- CRUDL Functions ---------- */

/**
 *  lists all pokemon in order of national dex _id
 * 
 * @returns {JSON}
 *  The Pokemon Natioanl Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
    const national = await TemDex.find().lean().sort({_id: 1});
    response.status(200).json(national);
});

module.exports = {
    read: [readPokemon],
    list: [listNational]
}