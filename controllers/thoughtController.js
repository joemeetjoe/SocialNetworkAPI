// require the user and thought model to manipulate
const { User, Thought } = require('../models');
// export all of the functions to be used in routes
module.exports = {
    // get all thoughts /api/thoughts
    getThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then(async (thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
     // get single thought /api/thoughts/:id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id' })
            }
            res.json(thought)
        });
    },
    // post single thought and add that thought to the correct user /api/thoughts
    postNewThought(req, res) {
        Thought.create(req.body)
        .then((newThought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId},
                { $addToSet: {thoughts: newThought._id} },
                {new: true}
            );
        })
        .then((userWithNewThought) => {
            if (!userWithNewThought) {
                res.status(404).json({ message: "Thought created, but no user with that ID found"})
            }
            res.json(userWithNewThought);
        })
        .catch((err) => res.status(500).json(err));
    },
    // change single thought /api/thoughts/:id
    changeSingleThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {   thoughtText: req.body.thoughtText,
                username: req.body.username
            },
            {new: true}
        )
        .then((updatedThought) => {
            if (!updatedThought) {
                res.status(404).json({ message: 'No Thought with that ID'})
            }
            res.json(updatedThought);
        });
    },
    // delete single thought /api/thoughts/:id
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId})
        .then((deletedThought) => {
            if (!deletedThought){
                res.status(404).json({ message: 'No thought with that ID'})
            }
            res.json( {message: 'Thought successfully deleted' })
        });
    },
    // create a reaction and then add that reaction to the reaction /api/thoughts/:id/reactions
    createReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((newReaction) => {
            if (!newReaction) {
                res.status(404).json({ message: 'something went wrong'})
            }
            res.json(newReaction)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // delete a reaction to a thought based off of its id
    // /api/thoughts/:thoughtId/reactions/:reactionId
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $pull: { reactions: {_id: req.params.reactionId}} },
            { runValidators: true, new: true }
        )
        .then((deletedReaction) => {
            if (!deletedReaction) {
                res.status(404).json({ message: 'something went wrong'})
            }
            res.json(deletedReaction)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    }


