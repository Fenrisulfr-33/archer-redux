// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const National = require("../../../models/pokemon/nationalModel");
const { connect, disconnect } = require("../connection");
/**
 *  lists all pokemon in order of sword and shield dex number
 *
 * @returns {JSON}
 *  The base sword and shield dex
 */
const listDex = asyncHandler(async (request, response) => {
  const { game } = request.params;
  const { typeOne, typeTwo, asc, desc } = request.query;

  let gameDex = [];

  const gameSelect = "pokedexNumber name type abilities baseStats";

  // Checks for pokemon types from parameters
  let typeStatment = null;
  // Type check else statment
  if (typeOne && typeTwo) {
    typeStatment = [
      { "type.one": typeOne, "type.two": typeTwo },
      { "type.one": typeTwo, "type.two": typeOne },
    ];
  } else if (!typeOne && typeTwo) {
    typeStatment = [{ "type.one": typeTwo }, { "type.two": typeTwo }];
  } else if (!typeTwo && typeOne) {
    typeStatment = [{ "type.one": typeOne }, { "type.two": typeOne }];
  }

  let dex = "";
  if (game === "scarlet-violet") {
    dex = "pokedexNumber.scvi";
  } else if (game === "sword-shield") {
    dex = "pokedexNumber.swsh";
  } else if (game === "isle-of-armor") {
    dex = "pokedexNumber.ioa";
  } else if (game === "crown-tundra") {
    dex = "pokedexNumber.ct";
  }

  // Create sorting object for array return
  const sort = asc ? { [asc]: 1 } : desc ? { [desc]: -1 } : { [dex]: 1 };

  // if the typeStatement exists apply typeStatement
  if (typeStatment) {
    gameDex = await National.find()
      .where(dex)
      .exists(true)
      .or(typeStatment)
      .select(gameSelect)
      .sort(sort);
  } else {
    // return national dex without filters
    gameDex = await National.find()
      .where(dex)
      .exists(true)
      .select(gameSelect)
      .sort(sort);
  }

  disconnect();
  response.status(200).json(gameDex);
});

module.exports = {
  list: [connect, listDex],
};
