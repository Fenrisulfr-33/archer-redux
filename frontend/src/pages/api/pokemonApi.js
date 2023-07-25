const local = true;
const API_BASE_URL = local ? 'http://localhost:5000' : 'https://archer-test-backend.vercel.app';

export const getPokemon = async (id, game) => {
    if (game) {
        const response = await fetch(`${API_BASE_URL}/pokemon/national/${id}/${game}`),
        pokemon = await response.json();
        return pokemon;
    } else {
        const response = await fetch(`${API_BASE_URL}/pokemon/national/${id}`),
        pokemon = await response.json();
        return pokemon;
    }
}
export const getPokemonMoves = async (id, game) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/national/${id}/test/${game}`),
    moves = await response.json();
    return moves;
}
export const getNationalDex = async (query) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/national${query}`),
    returnObj = await response.json();
    return returnObj;
}
export const getGameDex = async (url, query) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/${url}/pokedex${query}`),
    returnObj = await response.json();
    return returnObj;
}
export const getMove = async (id) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/moves/${id}`),
    returnObj = await response.json();
    return returnObj;
}
export const getMoves = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/moves`),
    returnObj = await response.json();
    return returnObj;
}
export const getAbility = async (id) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/abilities/${id}`),
    returnObj = await response.json();
    return returnObj;
}
export const getAbilities = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/abilities`),
    returnObj = await response.json();
    return returnObj;
}
export const getSearchResults = async (query) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/search${query}`),
    returnObj = await response.json();
    return returnObj;
}