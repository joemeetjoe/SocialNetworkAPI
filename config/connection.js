// pulling down mongoose and using the connect feature
const {connect, connection} = require('mongoose');
// creating and connecting the database
connect('mongodb://localhost/socialnetwork', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
// exporting the connection to be used in other files
module.exports = connection;