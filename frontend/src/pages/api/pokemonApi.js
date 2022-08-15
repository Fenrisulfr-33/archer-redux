const URL = 'http://localhost:5000/pokemon';

export const getNationalDex = async () => {
    const response = await fetch(`${URL}/national`),
    national = await response.json();
    return national;
}

export const getPokemon = async (id, game) => {
    const response = await fetch(`${URL}/national/${id}/${game}`),
    pokemon = await response.json();
    return pokemon;
}