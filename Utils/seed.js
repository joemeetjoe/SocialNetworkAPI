const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models')
const { userNames, emails } = require('./userData');
const { thoughtText, thoughtUserNames } = require('./thoughtData');

// if there is an error in the connection, return an error
connection.on('error', (err) => err);
// once the database is connected, execute the following
connection.once('open', async () => {
    console.log('connected');
    // delete the current database
    await User.deleteMany({});
    await Thought.deleteMany({});
    // set an empty array to put new user objects into
    const users = [];
    // for the length of usernames array, make new user objects with names and emails
    for (i = 0; i < userNames.length; i ++){
        const name = userNames[i];
        console.log(name)
        const email = emails[i];
        console.log(email);
        // push the new user objects to the array
        users.push({
            name, 
            email,
            thoughts: [],
            friends: [User._id],
        });
        console.log(users);
    }
    // insert all of the objects in the users array into the model
    await User.collection.insertMany(users);
    // return a response to confirm seed has taken place
    console.table(users);


    const thoughts = []
    // for the length of the thoughts array, make new thought objects with thoughts and users
    for (i = 0; i < thoughtText.length; i ++){
        const name = thoughtUserNames[i];
        
        const thought = thoughtText[i];
        
        // push the new user objects to the array
        thoughts.push({
            thought, 
            name,
        });
        console.log(thoughts);
    }
    // insert all of the objects in the thoughts array into the model
    await Thought.collection.insertMany(thoughts)
})

