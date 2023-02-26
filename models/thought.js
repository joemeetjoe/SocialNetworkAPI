// importing in the schema and model features from mongoose
const { Schema, model} = require('mongoose');
const { reactionSchema } = require('./reaction');

// schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt:  {
            type: Date,
            default: Date.now, 
            get: time => time.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);
// virtual that returns how many reactions are in the reactions schema
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        let reactionLength = this.reactions.length;
        return reactionLength;
    })

// initializing the thought model
const Thought = model('thought', thoughtSchema);
// exporting the module to be used by other programs
module.exports = Thought