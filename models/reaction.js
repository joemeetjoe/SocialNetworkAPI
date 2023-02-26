// importing in the schema and model features from mongoose
const { Schema, model} = require('mongoose');

// schema to create thought model
const reactionSchema = new Schema(
    {
        // reactionId: Schema.Types.ObjectId,
        // reactionBody: {
        //     String,
        //     required: true,
        //     maxLength: 208,
        // },
        // username: {
        //     String,
        //     required: true,
        // },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     // getter method
        },
    // }
);


// initializing the thought model
const Reaction = model('reaction', reactionSchema);
// exporting the module to be used by other programs
module.exports = {
    Reaction,
    reactionSchema
}