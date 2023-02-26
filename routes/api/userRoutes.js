const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
    changeSingleUser,
} = require('../../controllers/userController')

// /api/users
router.route('/')
    .get(getUsers)
    .post(postNewUser)
    
router.route('/:userId')
    .get(getSingleUser)
    .put(changeSingleUser)



module.exports = router;