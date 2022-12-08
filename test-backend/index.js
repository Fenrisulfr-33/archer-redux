const express = require("express");
const notFound = require('./src/errors/notFound');
const errorHandler = require('./src/errors/errorHandler');
const cors = require('cors');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const pokemonRouter = require('./src/routes/pokemon/index');

const app = express();
app.use(cors());
app.use(express.json()); // This parse the body data as JSON to be able to use request.body, etc... A.K.A Middleware access
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use('/pokemon', pokemonRouter);


app.use(notFound); // If path is not found send back an error
app.use(errorHandler); // If there is a problem with the request send back the error

app.listen(port, () => {console.log(`Running on port ${port}.`)});
// Export the Express API
module.exports = app;