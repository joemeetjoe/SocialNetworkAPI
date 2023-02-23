// requiring router functionaility from express and the api file
const router = require('express').Router();
const apiRoutes = require('./api');
// assigning the api folder to /api path
router.use('/api', apiRoutes);
// if a wrong route is typed in, send back an error message
router.use((req, res) => {
    return res.send('Wrong route!');
});
// export the routes
module.exports = router;