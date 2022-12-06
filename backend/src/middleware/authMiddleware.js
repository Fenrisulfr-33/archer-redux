const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Users = require('../models/usersModel');

const protect = asyncHandler(async (request, response, next) => {
    let token;
    // The authorization token is formatted like so, 'Bearer <token>'
    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from Header
            token = request.headers.authorization.split(' ')[1];
            // Verify the token
            const decoded = jwt.verify(toekn, process.env.JWT_SECRET); // This takes in the token then the secret itself
            // Get user from the token, the token has the User Id as a payload
            request.user = await Users.findById(decoded.id).select('-password') // this will decoded it and give us the id, and the password is hashed so we dont want that included
            next();
        } catch (error) {
            console.log(error);
            response.status(401);
            throw new Error('Not Authorized');
        }
    }
    if(!token) {
        response.status(401);
        throw new Error('Not authorized, no token');
    }
});

module.exports = protect;