const { User }= require('../models');


module.exports = {
    getUser(req, res) {
      User.find()
        // .populate({ path: 'tags', select: '-__v' })
        .then((posts) => res.json(posts))
        .catch((err) => {
          console.error({ message: err });
          return res.status(500).json(err);
        });
    },
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.postId })
        // .populate({ path: 'tags', select: '-__v' })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(post)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new post
    createUser(req, res) {
      User.create({ 
            username: req.body.username,
            email:req.body.email})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
  };
  
  