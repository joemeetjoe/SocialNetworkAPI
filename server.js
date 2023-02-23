// require express for node functionality, require config folder for connection
// require routes to route to the controllers folders.
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// setting up the local port and making express easier to use
const PORT = 3001;
const app = express();
// parsing functionality and routes
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
// once the db is connected, open up the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Social Network Backend listening on port ${PORT}!`);
    });
});