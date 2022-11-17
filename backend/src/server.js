const express = require('express');
const dotenv = require('dotenv').config(); // this allows us to have a dot env file with config()
const colors = require('colors');
const port = process.env.PORT || 5000;
const connectDB = require('./db/connection');
const notFound = require('./errors/notFound');
const errorHandler = require('./errors/errorHandler')
const nationalRouter = require('./routes/pokemon/national/national.router');
const swshCompRouter = require('./routes/pokemon/swsh-comp/swsh-comp.router');
const teamsRouter = require('./routes/pokemon/teams/teams.router');
const usersRouter = require('./routes/users/users.router');
const movesRouter = require('./routes/pokemon/moves/moves.router');
const cors = require('cors');

// connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // This parse the body data as JSON to be able to use request.body, etc... A.K.A Middleware access
app.use(express.urlencoded({ extended: false }));

app.use('/pokemon/national', nationalRouter);
app.use('/pokemon/moves', movesRouter);
app.use('/pokemon/swsh', swshCompRouter);
app.use('/pokemon', teamsRouter);
app.use('/users', usersRouter);

app.use(notFound); // If path is not found send back an error
app.use(errorHandler); // If there is a problem with the request send back the error

app.listen(port, () => console.log(`Server started on port ${port}.`)); // Listening confirmation