const API_BASE_URL = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : 'http://localhost:5000';
const env = process.env.NODE_ENV;

export const getPokemon = async (id, game) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/national/${id}/${game}`),
    pokemon = await response.json();
    return pokemon;
}
export const getDex = async (url) => {
    const response = await fetch(`${API_BASE_URL}/pokemon/${url}`),
    returnObj = await response.json();
    return returnObj;
}
export const getMoves = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/moves`),
    returnObj = await response.json();
    return returnObj;
}