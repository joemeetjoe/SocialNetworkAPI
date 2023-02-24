const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models')
const { userNames, emails } = require('./userData');

// if there is an error in the connection, return an error
connection.on('error', (err) => err);
// once the database is connected, execute the following
connection.once('open', async () => {
    console.log('connected');
    // delete the current database
    await User.deleteMany({});
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
        });
        console.log(users);
    }
    // insert all of the objects in the users array into the model
    await User.collection.insertMany(users);
    // return a response to confirm seed has taken place
    console.table(users);
})
