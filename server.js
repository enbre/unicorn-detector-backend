// imports
const express = require('express');
const cors = require('cors');
const weather = require('weather-js');
const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

// middleware - CORS config
app.use(cors())

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
// app.use('/api/v1/games', routes.games);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
