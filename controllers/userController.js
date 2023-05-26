const { User }= require('../models');


module.exports = {
    getUser(req, res) {
      User.find()
     
        .then((users) => res.json(users))
        .catch((err) => {
          console.error({ message: err });
          return res.status(500).json(err);
        })
        
    },
    getSingleUser(req, res) {
      User.findOne({ _id: req.params._id })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
      User.create({ 
            username: req.body.username,
            email:req.body.email})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res){
      User.findOneAndRemove({_id: req.params._id}).then((user) =>
      !user? res.status(404).json({msg:'No User with this id!'})
      : User.findOneAndUpdate(
        {user: req.params._id},
        {$pull:{ user: req.params._id}},
        {new: true}
      )
      ).then(() => res.json({msg:'User successfully deleted! '}))
      .catch((err) => res.status(500).json(err))
    },

    updateUser(req, res){
      User.findOneAndUpdate(
        {_id: req.params._id},
        {$set: req.body},
        {runValidators: true, new: true}
      )
      .then((users) => !users ? res.status(404).json({msg:'No thought with this id!'}): res.json(users)
      )
      .catch((err) => {console.log(err);
         res.status(500).json(err)
      })
    }
  };
  
  