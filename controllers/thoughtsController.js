const { Thought }= require('../models');

module.exports = {
    getUser(req, res) {
      Thought.find()
        // .populate({ path: 'tags', select: '-__v' })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
          console.error({ message: err });
          return res.status(500).json(err);
        });
    },
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.postId })
        // .populate({ path: 'tags', select: '-__v' })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(post)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new post
    createThought(req, res) {
      Thought.create({ 
            thoughtText: req.body.thoughtText,
            })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
  };
  
  