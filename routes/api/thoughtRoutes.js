// require express.router and all the thought functions
const router = require('express').Router();
// importing all the functions from thought controller
const {
    getThoughts,
    getSingleThought,
    postNewThought,
    changeSingleThought,
    deleteThought,
} = require('../../controllers/thoughtController');
// /thoughts
router.route('/')
    .get(getThoughts)
    .post(postNewThought)
// /thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(changeSingleThought)
    .delete(deleteThought)
// exporting the router to be used by the server
module.exports = router;