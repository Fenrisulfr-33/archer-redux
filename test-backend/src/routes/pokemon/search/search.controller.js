 // This lets use use try catch without always have to catch an error
 const asyncHandler = require('express-async-handler');
 const National = require('../../../models/pokemon/nationalModel');
 const { connect, disconnect } = require('../connection');

 const searchPokemon = asyncHandler(async (request, response) => {
    const {
        move1, 
        move2, 
        move3, 
        move4,
        // game,
    } = request.query;
    const game = 'scarlet-violet';
    if (move4){
        const found = await National
        .find()
        .where(`moves.${move1}.${game}-lvl` || `moves.${move1}.${game}-machine` ||`moves.${move1}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move2}.${game}-lvl` || `moves.${move2}.${game}-machine` ||`moves.${move2}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move3}.${game}-lvl` || `moves.${move3}.${game}-machine` ||`moves.${move3}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move4}.${game}-lvl` || `moves.${move4}.${game}-machine` ||`moves.${move4}.${game}-tutor`)
        .exists(true)
        .select('name.english type abilities baseStats')
        .sort({ _id: 1 });
        disconnect();
        response.status(200).json(found);
    } else if (move3){
        const found = await National
        .find()
        .where(`moves.${move1}.${game}-lvl` || `moves.${move1}.${game}-machine` ||`moves.${move1}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move2}.${game}-lvl` || `moves.${move2}.${game}-machine` ||`moves.${move2}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move3}.${game}-lvl` || `moves.${move3}.${game}-machine` ||`moves.${move3}.${game}-tutor`)
        .exists(true)
        .select('name.english type abilities baseStats')
        .sort({ _id: 1 });
        disconnect();
        response.status(200).json(found);
    } else if (move2){
        const found = await National
        .find()
        .where(`moves.${move1}.${game}-lvl` || `moves.${move1}.${game}-machine` ||`moves.${move1}.${game}-tutor`)
        .exists(true)
        .where(`moves.${move2}.${game}-lvl` || `moves.${move2}.${game}-machine` ||`moves.${move2}.${game}-tutor`)
        .exists(true)
        .select('name.english type abilities baseStats')
        .sort({ _id: 1 });
        disconnect();
        response.status(200).json(found);
    } else {
        const found = await National
        .find()
        .where(`moves.${move1}.${game}-lvl` || `moves.${move1}.${game}-machine` ||`moves.${move1}.${game}-tutor`)
        .exists(true)
        .select('name.english type abilities baseStats')
        .sort({ _id: 1 });
        disconnect();
        response.status(200).json(found);
    }
 });
 
 module.exports = {
     read: [connect, searchPokemon]
 }