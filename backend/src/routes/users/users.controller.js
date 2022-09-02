const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Blowfish Cypher
const Users = require('../../models/usersModel');

/* ------- Middleware Functions -------- */

/* ---------- CRUDL Functions ---------- */

/**
 * @desc    Creates a new user
 * @route   POST api/users/new
 * @access  Public
 * @returns {JSON} The data for the newly created
 */
const createUser = asyncHandler(async (request, response) => {
    const { username, password } = request.body.data;
    // Check to make sure all data if filled in
    if (!username || !password) {
        response.status(400);
        throw new Error('All fields not filled in');
    }
    // Check to see if the user already exsists
    const userExists = await Users.findOne({ username });
    if (userExists) {
        response.status(400);
        throw new Error('Username already exists');
    } else {
        // Hash password
        const salt = await bcrypt.genSalt(10); // takes in a number of rounds, 10 is the default
        const hashedPassword = await bcrypt.hash(password, salt); // salt is randomly generated data that adds to the hash to always be unique
        // Create user
        const user = await Users.create({
            username,
            password: hashedPassword
        });
        // If user gets created return user info
        if (user) {
            response.status(201).json({
                _id: user.id,
                username: user.username,
                token: generateToken(user._id)
            })
        } else { // Something went wrong
            response.status(400);
            throw new Error('Invalid user data');
        }
    }
});

/**
 * @desc    Creates a new user
 * @route   POST api/users/new
 * @access  Public
 * @returns {JSON} The data for the newly created
 */
 const loginUser = asyncHandler(async (request, response) => {
    const { username, password } = request.body.data;
    // Check for username
    const user = await Users.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
        response.json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        response.status(400);
        throw new Error('Invalid credentials');
    }
});

const getMe = asyncHandler(async (request, response) => {
    const { _id, username } = await Users.findById(request.user.id);
    response.status(200).json({
        id: _id,
        username
    })
})

// Generate a token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // 30 days
    });
}

module.exports = {
    create: [createUser],
    login: [loginUser],
    me: [getMe]
}

