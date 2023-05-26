const { Thought, User }= require('../models');

module.exports = {
    getThoughts(req, res) {
      Thought.find()
        // .populate({ path: 'tags', select: '-__v' })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
        ;
    },
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params._id })
        // .populate({ path: 'tags', select: '-__v' })
        .then((thoughts) =>
          !thoughts
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(thoughts)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new thought
    createThought(req, res) {
      Thought.create({ 
            thoughtText: req.body.thoughtText,
            username: req.body.username
             })
             .then((thought) => {
              return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
              )
              .populate('thoughts')
              .exec()
            })
          
          .then((thought) => res.json(thought).populate(User))

          .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res){
      Thought.findOneAndRemove({_id: req.params._id}).then((thoughts) =>
      !thoughts? res.status(404).json({msg:'No thought with this id!'})
      : Thought.findOneAndUpdate(
        {thoughts: req.params._id},
        {$pull:{ thoughts: req.params._id}},
        {new: true}
      )
      ).then(() => res.json({msg:'Thought successfully deleted! '}))
      .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res){
      Thought.findOneAndUpdate(
        {_id: req.params._id},
        {$set: req.body},
        {runValidators: true, new: true}
      )
      .then((thoughts) => !thoughts ? res.status(404).json({msg:'No thought with this id!'}): res.json(thoughts)
      )
      .catch((err) => {console.log(err);
         res.status(500).json(err)
      })
    }
    
  };
  
  