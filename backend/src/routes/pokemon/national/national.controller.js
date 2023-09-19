// This lets use use try catch without always have to catch an error
const asyncHandler = require("express-async-handler");
const National = require("../../../models/pokemon/nationalModel");
const Moves = require("../../../models/pokemon/movesModel");
const { connect, disconnect } = require("../connection");

/* ---------- Helpers ---------- */

const getPokemonMoves = (pokemonMoves, dbMoves) => {
  const returnMoves = {};
  for (const [game, methodList] of Object.entries(pokemonMoves)) {
    returnMoves[game] = {};
    for (const [method, list] of Object.entries(pokemonMoves[game])) {
      if (typeof list[0] === typeof {}) {
        const returnList = list.map((move) => {
          const foundMove = dbMoves.find(
            (dbMove) => dbMove.name.english === move.name
          );
          if (foundMove) {
            return {
              ...move,
              id: foundMove._id,
              name: foundMove.name.english,
              type: foundMove.type,
              category: foundMove.category,
              pp: foundMove.pp,
              power: foundMove.pp,
              accuracy: foundMove.accuracy,
              contact: foundMove.contact,
              shortEffect: foundMove.effect?.shortEffect,
              target: foundMove.target,
              contest: foundMove.contest,
              priority: foundMove.priority,
            };
          }
        });
        returnMoves[game][method] = returnList;
      } else {
        // Must be an array
        const returnList = list.map((move) => {
          const foundMove = dbMoves.find(
            (dbMove) => dbMove.name.english === move
          );
          if (foundMove) {
            return {
              id: foundMove._id,
              name: foundMove.name.english,
              type: foundMove.type,
              category: foundMove.category,
              pp: foundMove.pp,
              power: foundMove.pp,
              accuracy: foundMove.accuracy,
              contact: foundMove.contact,
              shortEffect: foundMove.effect?.shortEffect,
              target: foundMove.target,
              contest: foundMove.contest,
              priority: foundMove.priority,
            };
          }
        });
        returnMoves[game][method] = returnList;
      }
    }
  }
  return returnMoves;
};

const getPokemonForms = async (pokemonId, formsTab, dbMoves) => {
  const returnForms = {
    startingIndex: 0,
    formsTab: []
  }

  for (let i = 0; i < formsTab.length; i++) {
    const form = formsTab[i];
    if (form.id === pokemonId) {
      returnForms.startingIndex = i;
    }
    const pokemon = await National.findById(Number(form.id)).lean();
    const newMoves = getPokemonMoves(pokemon.moves, dbMoves);
    pokemon.moves = newMoves;
    pokemon.baseStats = getPokemonBaseStats(pokemon.baseStats);
    pokemon.index = i;
    returnForms.formsTab.push(pokemon);
  }

  return returnForms;
}

const getPokemonBaseStats = (baseStats) => {

  const hp = {
    base: baseStats.hp,
    min: minStatFormula('hp', baseStats.hp),
    max: maxStatFormula('hp', baseStats.hp),
    tier: getTierColor('hp', baseStats.hp),
    width: getTierWidth('hp', baseStats.hp),
  };
  const atk = {
    base: baseStats.atk,
    min: minStatFormula('atk', baseStats.atk),
    max: maxStatFormula('atk', baseStats.atk),
    tier: getTierColor('atk', baseStats.atk),
    width: getTierWidth('atk', baseStats.atk),
  };
  const def = {
    base: baseStats.def,
    min: minStatFormula('def', baseStats.def),
    max: maxStatFormula('def', baseStats.def),
    tier: getTierColor('def', baseStats.def),
    width: getTierWidth('def', baseStats.def),
  };
  const spatk = {
    base: baseStats.spatk,
    min: minStatFormula('spatk', baseStats.spatk),
    max: maxStatFormula('spatk', baseStats.spatk),
    tier: getTierColor('spatk', baseStats.spatk),
    width: getTierWidth('spatk', baseStats.spatk),
  };
  const spdef = {
    base: baseStats.spatk,
    min: minStatFormula('spdef', baseStats.spdef),
    max: maxStatFormula('spdef', baseStats.spdef),
    tier: getTierColor('spdef', baseStats.spdef),
    width: getTierWidth('spdef', baseStats.spdef),
  };
  const spd = {
    base: baseStats.spd,
    min: minStatFormula('spd', baseStats.spd),
    max: maxStatFormula('spd', baseStats.spd),
    tier: getTierColor('spd', baseStats.spd),
    width: getTierWidth('spd', baseStats.spd),
  };
  return {
    hp,
    atk,
    def,
    spatk,
    spdef,
    spd,
    total: baseStats.total,
  }
}

const hpFormula = (baseStat, IV, EV, level) => {
  return Math.floor(
    ((2 * baseStat + IV + EV / 4) * level) / 100 + level + 10
  );
};

const otherStat = (baseStat, IV, EV, level, nature) => {
  return Math.floor(
    (((2 * baseStat + IV + EV / 4) * level) / 100 + 5) * nature
  );
};

const minStatFormula = (title, stat) => {
  if (title === "hp") {
    return hpFormula(stat, 0, 0, 100);
  } else {
    return otherStat(stat, 0, 0, 100, 0.9);
  }
};

const maxStatFormula = (title, stat) => {
  if (title === "hp") {
    return hpFormula(stat, 31, 252, 100);
  } else {
    return otherStat(stat, 31, 252, 100, 1.1);
  }
};

const getTierColor = (title, stat) => {
  let tierColor = '';
  const tier = {
    one: "bg-green-600",
    two: "bg-green-400",
    three: "bg-green-300",
    four: "bg-sky-500",
    five: "bg-sky-300",
    six: "bg-purple-200",
    seven: "bg-purple-50",
    seven: "bg-black",
  };

  if (title === 'hp') {
    if (stat > 0) { tierColor = tier.one };
    if (stat > 42.5) { tierColor = tier.two };
    if (stat > 85) { tierColor = tier.three };
    if (stat > 127.5) { tierColor = tier.four };
    if (stat > 170) { tierColor = tier.five };
    if (stat > 212.5) { tierColor = tier.six };
  } else if (title === 'atk' || title === 'spatk') {
    if (stat > 0) { tierColor = tier.one };
    if (stat > 30) { tierColor = tier.two };
    if (stat > 60) { tierColor = tier.three };
    if (stat > 90) { tierColor = tier.four };
    if (stat > 120) { tierColor = tier.five };
    if (stat > 150) { tierColor = tier.six };
  } else if (title === 'def' || title === 'spdef') {
    if (stat > 0) { tierColor = tier.one };
    if (stat > 38.3) { tierColor = tier.two };
    if (stat > 76.6) { tierColor = tier.three };
    if (stat > 114.9) { tierColor = tier.four };
    if (stat > 153.2) { tierColor = tier.five };
    if (stat > 191.5) { tierColor = tier.six };
  } else if (title === 'spd') {
    if (stat > 0) { tierColor = tier.one };
    if (stat > 33.3) { tierColor = tier.two };
    if (stat > 66.6) { tierColor = tier.three };
    if (stat > 99.9) { tierColor = tier.four };
    if (stat > 133.2) { tierColor = tier.five };
    if (stat > 166.5) { tierColor = tier.six };
  }
  return tierColor;
}

const getTierWidth = (title, stat) => {
  if (title === "hp") {
    const statRounded = Math.round([stat * 100] / 255);
    return statRounded;
    // return getStatWidth(statRounded);
  } else if (title === "atk" || title === "spatk") {
    const statRounded = Math.round([stat * 100] / 180);
    return statRounded;
    // return getStatWidth(statRounded);
  } else if (title === "def" || title === "spdef") {
    const statRounded = Math.round([stat * 100] / 230);
    return statRounded;
    // return getStatWidth(statRounded);
  } else if (title === "spd") {
    const statRounded = Math.round([stat * 100] / 200);
    return statRounded;
    // return getStatWidth(statRounded);
  }
}

const getStatWidth = (width) => {
  let returnWidth = '';

  if (width === 0) {
    returnWidth = 'w-[1px]'
  } else if (width <= 9) {
    returnWidth = 'w-1/8';
  } else if (width <= 17) {
    returnWidth = 'w-1/6';
  } else if (width <= 20) {
    returnWidth = 'w-1/5';
  } else if (width <= 25) {
    returnWidth = 'w-1/4';
  } else if (width <= 34) {
    returnWidth = 'w-1/3';
  } else if (width <= 40) {
    returnWidth = 'w-2/5';
  } else if (width <= 50) {
    returnWidth = 'w-1/2';
  } else if (width <= 59) {
    returnWidth = 'w-7/12';
  } else if (width <= 67) {
    returnWidth = 'w-2/3';
  } else if (width <= 75) {
    returnWidth = 'w-3/4';
  } else if (width <= 84) {
    returnWidth = 'w-5/6';
  } else if (width <= 91) {
    returnWidth = 'w-11/12';
  } else if (width <= 100) {
    returnWidth = 'w-full';
  }
  return returnWidth;
}

/* ---------- Middleware ---------- */

const pokemonExists = asyncHandler(async (request, response, next) => {
  const { id } = request.params;
  let pokemon = null;

  isNaN(id)
    ? (pokemon = await National.findOne({ key: id }).lean())
    : (pokemon = await National.findById(Number(id)).lean());

  if (!pokemon) {
    // If pokemon does not return from DB
    response.status(400);
    throw new Error("Pokemon not found.");
  } else {
    response.locals.pokemon = pokemon;
    next();
  }
});

const getMoves = asyncHandler(async (request, response, next) => {
  // Getting all the moves right away will be faster then requesting it every time we need information
  const moves = await Moves.find().lean();
  // Working on
  // const moves = await Moves.find().select('name.english type category contest pp power accuracy contact generation target effect priority').lean();
  if (!moves) {
    // If moves do not return from DB.
    response.status(400);
    throw new Error("Moves data not found, error on Server/Database side.");
  } else {
    response.locals.moves = moves;
    next();
  }
});

const reformatPokemonBaseStats = asyncHandler(async (request, response, next) => {
  const { pokemon } = response.locals;
  pokemon.baseStats = getPokemonBaseStats(pokemon.baseStats);

  response.locals.pokemon = pokemon;
  next();
});

/**
 *  Finds a pokemon base upon its national dex _id,
 *  and reassigns its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
// TODO: Make this page work so when you go from a dex to that page it has the moves
const readPokemonByGame = asyncHandler(async (request, response, next) => {
  const { pokemon, moves } = response.locals;
  const { game } = request.params;
  // Reformat moves to have pop up information.
  const newMoves = getPokemonMoves(pokemon.moves, moves);
  pokemon.moves = newMoves;

  disconnect();
  response.status(200).json(pokemon);
});

/* ----------- CRUD Ops ----------- */

/**
 *  Finds a pokemon base upon its national dex _id ,
 *  and reassigns its move values as object with
 *  basic move information
 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response, next) => {
  const { pokemon, moves } = response.locals;
  // Get pokemon forms tab data if formsTab exists.
  if (pokemon.formsTab) {
    const forms = await getPokemonForms(pokemon._id, pokemon.formsTab, moves);
    disconnect();
    response.status(200).json(forms);
  } else {
    // Get more detailed information for each pokemon move for MoveModal.
    pokemon.moves = getPokemonMoves(pokemon.moves, moves);

    disconnect();
    response.status(200).json(pokemon);
  }
});
/**
 *  lists all pokemon in order of national dex _id
 *
 * @returns {JSON}
 *  The Pokemon National Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
  // Define parameters for types, and stats
  const { typeOne, typeTwo, asc, desc } = request.query;
  // Create return array to avoid repetitive code
  let national = [];
  // Creates whats returned from model
  const nationalSelect = "name.english type abilities baseStats";
  // Create sorting object for array return
  const sort = asc ? { [asc]: 1 } : desc ? { [desc]: -1 } : { _id: 1 };
  // Checks for pokemon types from parameters
  let typeStatement = null;
  // Type check else statement
  if (typeOne && typeTwo) {
    typeStatement = [
      { "type.one": typeOne, "type.two": typeTwo },
      { "type.one": typeTwo, "type.two": typeOne },
    ];
  } else if (!typeOne && typeTwo) {
    typeStatement = [{ "type.one": typeTwo }, { "type.two": typeTwo }];
  } else if (!typeTwo && typeOne) {
    typeStatement = [{ "type.one": typeOne }, { "type.two": typeOne }];
  }
  // if the typeStatement exists apply typeStatement
  if (typeStatement) {
    national = await National.find()
      .or(typeStatement)
      .select(nationalSelect)
      .sort(sort);
  } else {
    // return national dex without filters
    national = await National.find().select(nationalSelect).sort(sort);
  }

  disconnect();
  response.status(200).json(national);
});

module.exports = {
  read: [connect, pokemonExists, getMoves,reformatPokemonBaseStats, readPokemon],
  readGame: [connect, pokemonExists, getMoves, readPokemonByGame],
  list: [connect, listNational],
};
