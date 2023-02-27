// require the user model to manipulate
const { User } = require('../models');
// export all of the functions to be used in routes
module.exports = {
    // get all users /api/users
    getUsers(req, res) {
        User.find({})
        .select('-__v')
        .populate(['thoughts', 'friends'])
        .then(async (users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // get single user /api/users/:id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate(['thoughts', 'friends'])
        .then(async (user) => {
            if (!user) {
                res.status(404).json({ message: 'No user with this id' })
            }
            res.json(user)
        });
    },
    // post single user /api/users
    postNewUser(req, res) {
        User.create(req.body)
        .then(async (newUser) => res.json(newUser))
        .catch((err) => res.status(500).json(err));
    },
    // change single user /api/users/:id
    changeSingleUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {   username: req.body.username,
                email: req.body.email 
            },
            {new: true}
        )
        .then((updatedUser) => {
            if (!updatedUser) {
                res.status(404).json({ message: 'No user with that ID'})
            }
            res.json(updatedUser);
        });
    },
    // delete single user /api/users/:id
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId})
        .then((deletedUser) => {
            if (!deletedUser){
                res.status(404).json({ message: 'No user with that ID'})
            }
            res.json( {message: 'User successfully deleted' })
        });
    },
}