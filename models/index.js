// creating a directory of all the models and exporting them
const User = require('./user');
const Reaction = require('./reaction');
const Thought = require('./thought');
// exporting all of the models to be used by the controllers
module.exports = {
    User,
    Reaction,
    Thought
};