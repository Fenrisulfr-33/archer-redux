// const API_BASE_URL = 'http://localhost:5000/pokemon';
// const headers = new Headers();
// headers.append("Content-Type", "application/json");

// export const addPokemonTeam = async (userId, signal) => {
//     const url = `${API_BASE_URL}/teams`; 
//     const options = { 
//       method: "PUT", 
//       headers,
//       body: JSON.stringify({ data: { userId }}), 
//       signal, 
//     }; 
//     const response = await fetch(url, options),
//     result = response.json();
//     return result;
// }

// export const updatePokemonTeam = async (userId, teamId, signal) => {
//     const url = `${API_BASE_URL}/teams`; 
//     const options = { 
//       method: "POST", 
//       headers, 
//       body: JSON.stringify({ data: { userId, teamId }}), 
//       signal, 
//     }; 
//     const response = await fetch(url, options),
//     result = response.json();
//     return result;
// }

// export const deletePokemonTeam = async (userId, teamId, signal) => {
//     const url = `${API_BASE_URL}/teams`; 
//     const options = { 
//       method: "DELETE", 
//       body: JSON.stringify({ data: { userId, teamId }}), 
//       signal, 
//     }; 
//     const response = await fetch(url, options),
//     result = response.json();
//     return result;
// }