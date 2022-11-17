const URL = 'http://localhost:5000/pokemon';

export const getPokemon = async (id, game) => {
    const response = await fetch(`${URL}/national/${id}/${game}`),
    pokemon = await response.json();
    return pokemon;
}

export const getDex = async (url) => {
    const response = await fetch(`${URL}/${url}`),
    returnObj = await response.json();
    return returnObj;
}