const { Thought }= require('../models');

module.exports = {
    getThoughts(req, res) {
      Thought.find()
        // .populate({ path: 'tags', select: '-__v' })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
        ;
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
    // create a new thought
    createThought(req, res) {
      Thought.create({ 
            thoughtText: req.body.thoughtText,
            username:req.body.username
          })
          
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
         
       
    }
    
  };
  
  