const URL = 'http://localhost:5000/pokemon';

export const getNationalDex = async () => {
    const reponse = await fetch(`${URL}/national`),
    national = await response.json();
    return national;
}