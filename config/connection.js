// pulling down mongoose
const mongoose = require('mongoose');
// creating and connecting the database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetwork', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
// exporting the connection to be used in other files
module.exports = mongoose.connection;