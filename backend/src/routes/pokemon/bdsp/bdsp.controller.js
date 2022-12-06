const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const Competitive = require('../../../models/competitiveModel');

/**
 *  lists all pokemon in order of national dex _id
 * @returns {JSON}
 *  The Pokemon Natioanl Dex up to 898
 */
 const listBDSPComp = asyncHandler(async (request, response) => {
    const national = await Competitive.find().sort({_id: 1});
    response.status(200).json(national);
})

module.exports = {
    list: [listBDSPComp]
}