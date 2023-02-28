// require express.router and all the thought functions
const router = require('express').Router();
// importing all the functions from thought controller
const {
    getThoughts,
    getSingleThought,
    postNewThought,
    changeSingleThought,
    deleteThought,
    createReaction,
    deleteReaction
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
// /thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction)
    
// /thoughts/:thoughtId/reactions/:reactionId 
router.route('/:thoughtId/reactions/:reactionId')    
    .delete(deleteReaction)

// exporting the router to be used by the server
module.exports = router;