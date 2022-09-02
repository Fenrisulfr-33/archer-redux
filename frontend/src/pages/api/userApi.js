const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * @desc This is a post request to the backend to allow the user to create an account, then redirects them to the home page with a token
 * @returns A token if successful
 */
export async function registerUser(user, signal) { 
  const url = `${API_BASE_URL}/users/register`; 
  const options = { 
      method: "POST", 
      headers, 
      body: JSON.stringify({ data: user }), 
      signal, 
  }; 
  const response = await fetch(url, options, user),
  result = response.json();
  return result;
}

/**
 * @desc This is a post request to the backend to allow the user to login
 * @returns A token if successful
 */
export async function loginUser(user, signal) { 
  const url = `${API_BASE_URL}/users/login`; 
  const options = { 
    method: "POST", 
    headers, 
    body: JSON.stringify({ data: user }), 
    signal, 
  }; 
  const response = await fetch(url, options, user),
  result = response.json();
  return result;
}