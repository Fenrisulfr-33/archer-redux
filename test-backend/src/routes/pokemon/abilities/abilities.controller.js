// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const Abilities = require("../../../models/pokemon/abilitiesModel");
const { connect, disconnect } = require("../connection");

const abilityExists = asyncHandler(async (request, response, next) => {
  const ability = await Abilities.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
  if (!ability) {
    // Case for if pokemon does not exsist
    response.status(400);
    throw new Error("Ability not found.");
  } else {
    response.locals.ability = ability;
    next();
  }
});

const readAbility = asyncHandler(async (request, response) => {
  const { ability } = response.locals;
  disconnect();
  response.status(200).json(ability);
});

const listAbilities = asyncHandler(async (request, response) => {
  const abilities = await Abilities.find()
    .select("name.english generation effect.shortEffect")
    .sort({ _id: 1 }); // just for the list view on the natioanl view page
  disconnect();
  response.status(200).json(abilities);
});

module.exports = {
  read: [connect, abilityExists, readAbility],
  list: [connect, listAbilities],
};
