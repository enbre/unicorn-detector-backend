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

// middleware - cors
const corsOptions = {
   // from which URLs do we want to accept requests
   origin: ['http://localhost:3000'],
   credentials: true, // allow the session cookie to be sent to and from the client
   optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

// middleware - API routes
app.use('/sightings', routes.sightings);
app.use('/unicorns', routes.unicorns);


// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
