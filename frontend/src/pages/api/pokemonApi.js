// const API_BASE_URL = (process.env.ENV === 'local') ? 'http://localhost:5000' : process.env.BACKEND_URL;
// Something is wrong with the .env files so use this for now
const API_BASE_URL = 'http://localhost:5000';
const isDevEnv = false;
// const nationalDex = require('./mockData/nationalDex.json');
// const swordShieldDex = require('./mockData/swordShield.json');
// const moves = require('./mockData/moves.json');

export const getPokemon = async (id, game) => {
    if(isDevEnv){
        const foundPokemon = await nationalDex.find((pokemon) => pokemon._id === Number(id));
        // const pokemonMoves = await changeGetPokemonMoves(foundPokemon, moves);
        // foundPokemon.moves = pokemonMoves;
        return foundPokemon;
    } else {
        const response = await fetch(`${API_BASE_URL}/pokemon/national/${id}/${game}`),
        pokemon = await response.json();
        return pokemon;
    }
}

export const getDex = async (url) => {
    if (isDevEnv){
        if (url === 'national') return nationalDex;
        if (url === 'sword-shield') return swordShieldDex;
    } else {
        const response = await fetch(`${API_BASE_URL}/pokemon/${url}`),
        returnObj = await response.json();
        return returnObj;
    }
}

export const getMoves = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/moves`),
    returnObj = await response.json();
    return returnObj;
}

// Dev Env Helper Functions
const changeGetPokemonMoves = (pokemon, moves) => {
    const pokemonMoves = {};
    for (const move in pokemon.moves) {
        console.log(move);
        if (pokemon.moves[move].hasOwnProperty(`${game}-egg`)) {
            // if intialMoves.egg exists skip else create it
            pokemonMoves.egg ? null : pokemonMoves['egg'] = [];
            // find the move in moves and add it to the egg array
            // TODO: Look at an easier way to find the move instead of this method, potientally use a mongo query
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.egg.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-lvl`)) {
            pokemonMoves.lvl ? null : pokemonMoves['lvl'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move),
                rep = {
                    ...found,
                    level: pokemon.moves[move][`${game}-lvl`]
                }
                pokemonMoves.lvl.push(rep)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-record`)) {
            pokemonMoves.record ? null : pokemonMoves['record'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.record.push(found)
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-machine`)) {
            pokemonMoves.machine ? null : pokemonMoves['machine'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move)
            pokemonMoves.machine.push(found);
        } else if (pokemon.moves[move].hasOwnProperty(`${game}-tutor`)) {
            pokemonMoves.tutor ? null : pokemonMoves['tutor'] = [];
            const found = moves.find((dexMove) => dexMove.name.english === move);
            pokemonMoves.tutor.push(found);
        }
    }
    return pokemonMoves;
}