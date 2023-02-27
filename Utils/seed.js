const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models')
const { userNames, emails } = require('./userData');
const { thoughtTextData, thoughtUserNames } = require('./thoughtData');

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
        const username = userNames[i];
        console.log(userNames[i]);
        const email = emails[i];

        // push the new user objects to the array
        users.push({
            username, 
            email,
        });
        console.log(userNames[i].friends);
    }
    // insert all of the objects in the users array into the model
    await User.collection.insertMany(users);
    // return a response to confirm seed has taken place
    console.table(users);
    


    const thoughts = []
    // for the length of the thoughts array, make new thought objects with thoughts and users
    for (i = 0; i < thoughtTextData.length; i ++){
        const username = thoughtUserNames[i];
        
        const thoughtText = thoughtTextData[i];
        
        // push the new user objects to the array
        thoughts.push({
            thoughtText, 
            username,
        });
        // console.log(thoughts);
    }
    // insert all of the objects in the thoughts array into the model
    await Thought.collection.insertMany(thoughts)
    console.table(thoughts);
})

