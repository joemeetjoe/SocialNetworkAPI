// require express router and all the router files
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


// assigning the file destinations to routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// exporting the routes for the server to use
module.exports = router;