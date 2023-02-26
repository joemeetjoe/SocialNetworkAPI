const { User } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find({})
        .select('-__v')
        .then(async (users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
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
    postNewUser(req, res) {
        User.create(req.body)
        .then(async (newUser) => res.json(newUser))
        .catch((err) => res.status(500).json(err));
    },
}