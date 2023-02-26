// importing in the schema and model features from mongoose
const { Schema, model} = require('mongoose');

// schema to create thought model
const reactionSchema = new Schema(
    {
        reactionId: Schema.Types.ObjectId,
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => time.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


// initializing the thought model
const Reaction = model('reaction', reactionSchema);
// exporting the module to be used by other programs
module.exports = {
    Reaction,
    reactionSchema
}