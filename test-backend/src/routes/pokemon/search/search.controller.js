// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const National = require("../../../models/pokemon/nationalModel");
const { connect, disconnect } = require("../connection");

const searchPokemon = asyncHandler(async (request, response) => {
  const returnArray = [];
  let {
    move1,
    move2,
    move3,
    move4,
    // game,
  } = request.query;
  const game = "scarlet-violet";

  const gameList = await National.find()
    .where(`moves.${game}`)
    .exists(true)
    .select(`name.english type abilities baseStats moves.${game}`)
    .sort({ _id: 1 });
  if (gameList.length > 0) {
    gameList.forEach((pokemon) => {
      const returnPokemon = {
        _id: pokemon._doc._id,
        name: pokemon._doc.name,
        type: pokemon._doc.type,
        abilities: pokemon._doc.abilities,
        baseStats: pokemon._doc.baseStats,
      };
      let foundMove1 = false;
      let foundMove2 = false;
      let foundMove3 = false;
      let foundMove4 = false;
      for (const [key, value] of Object.entries(pokemon.moves[game])) {
        if (key === "level-up") {
          if (move1) {
            pokemon.moves[game]["level-up"].find((move) => {
              if (move.name === move1) {
                foundMove1 = true;
              }
            });
          }
          if (move2) {
            pokemon.moves[game]["level-up"].find((move) => {
              if (move.name === move2) {
                foundMove2 = true;
              }
            });
          }
          if (move3) {
            pokemon.moves[game]["level-up"].find((move) => {
              if (move.name === move3) {
                foundMove3 = true;
              }
            });
          }
          if (move4) {
            pokemon.moves[game]["level-up"].find((move) => {
              if (move.name === move4) {
                foundMove4 = true;
              }
            });
          }
        } else {
          if (move1) {
            pokemon.moves[game][key].find((move) => {
              if (move.name === move1) {
                foundMove1 = true;
              }
            });
          }
          if (move2) {
            pokemon.moves[game][key].find((move) => {
              if (move.name === move2) {
                foundMove2 = true;
              }
            });
          }
          if (move3) {
            pokemon.moves[game][key].find((move) => {
              if (move.name === move3) {
                foundMove3 = true;
              }
            });
          }
          if (move4) {
            pokemon.moves[game][key].find((move) => {
              if (move.name === move4) {
                foundMove4 = true;
              }
            });
          }
        }
      }
      if (foundMove4 && foundMove3 && foundMove2 && foundMove1) {
        returnArray.push(returnPokemon);
      } else if (
        move4 === undefined &&
        foundMove3 &&
        foundMove2 &&
        foundMove1
      ) {
        returnArray.push(returnPokemon);
      } else if (
        move4 === undefined &&
        move3 === undefined &&
        foundMove2 &&
        foundMove1
      ) {
        returnArray.push(returnPokemon);
      } else if (
        move4 === undefined &&
        move3 === undefined &&
        move2 === undefined &&
        foundMove1
      ) {
        returnArray.push(returnPokemon);
      }
    });
  }

  disconnect();
  response.status(200).json(returnArray);
});

module.exports = {
  read: [connect, searchPokemon],
};
