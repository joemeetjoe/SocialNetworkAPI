// require the user model to manipulate
const { User } = require('../models');

module.exports = {
    // add a new friend to a user's friend list
    // /api/users/:userId/friends/:friendId
    addNewFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: { 'friends' : [req.params.friendId] }},
            {new: true}
            )
            .then((newFriend) => {
                if (!newFriend) {
                    res.status(404).json({ message: 'no user with that ID exists'})
                }
                res.json(newFriend)
            });
    },
    // delete a friend from a user's friend list
    // /api/users/:userId/friends/:friendId
    deleteNewEnemy(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $pull: { friends : req.params.friendId }},
            {new: true}
            )
            .then((newEnemy) => {
                if (!newEnemy) {
                    res.status(404).json({ message: 'no friend with that ID exists'})
                }
                res.json(newEnemy)
            });
    },
}