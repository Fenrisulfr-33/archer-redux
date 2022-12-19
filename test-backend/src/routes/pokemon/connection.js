const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const local = process.env.ENV === 'local' ? true : false;
// Connection process
const connect = asyncHandler(async (request, response, next) => {
    if (local) {
        next();
    } else {
        mongoose.set('strictQuery', true);
        const db = await mongoose.connect(process.env.POKEMON_DB_CONNECTION);
        console.log(`Mongo Connected: ${db.connection.host}`.cyan.underline);
        next();
    }
}), disconnect = asyncHandler(async (request, response, next) => {
    await mongoose.connection.close();
    console.log(`Mongo Disconnected: ${mongoose.connection.host}`.blue.underline);
}); 

module.exports = {
    connect,
    disconnect
}