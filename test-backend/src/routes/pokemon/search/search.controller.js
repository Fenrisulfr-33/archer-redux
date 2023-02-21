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
    const gameList = await National
        .find()
        .where(`moves.${game}`)
        .exists(true)
        // .select('name.english type abilities baseStats')
        .sort({ _id: 1 });
        console.log(move1)
    if (gameList.length > 0) {
        gameList.forEach((pokemon) => {
            if (pokemon.moves[game]['level-up']){
              
                const foundMove1 = pokemon.moves[game]['level-up'].find((move) => move.name === move1);
                if (foundMove1){
                    console.log(foundMove1)
                }
              
            }
        })
    }

    disconnect();
    response.status(200).json();
});

module.exports = {
    read: [connect, searchPokemon]
}