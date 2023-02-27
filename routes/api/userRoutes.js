// require express.router and all the user functions
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
    changeSingleUser,
    deleteUser,
} = require('../../controllers/userController');

// require the friendslist functions
const {
    addNewFriend,
    deleteNewEnemy,
} = require('../../controllers/friendController');
// /api/users
router.route('/')
    .get(getUsers)
    .post(postNewUser)
// /api/users/:id
router.route('/:userId')
    .get(getSingleUser)
    .put(changeSingleUser)
    .delete(deleteUser)
router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteNewEnemy)

    // export the routes to be used in the server
module.exports = router;