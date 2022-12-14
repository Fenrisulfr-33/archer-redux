const API_BASE_URL = (process.env.ENV === 'local') ? 'http://localhost:5000' : process.env.BACKEND_URL || 'https://archer-test-backend.vercel.app';

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