// importing in the schema and model features from mongoose
const { Schema, model } = require('mongoose');


// schema to create user model
const userSchema = new Schema(
    {
        username: { 
            type: String, 
            unique: true,  
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// virtual that will return how many friends the user has
userSchema
    .virtual('friendCount')
    .get(function () {
        let friendLength = this.friends.length;
        return friendLength;
    })

// initialize the user model
const User = model('user', userSchema);
// export the user model
module.exports = User;

