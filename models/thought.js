// importing in the schema and model features from mongoose
const { Schema, model} = require('mongoose');

// schema to create thought model
const thoughtSchema = new Schema({

})

// exporting the module to be used by other programs


const Thought = model('thought', thoughtSchema);

module.exports = Thought