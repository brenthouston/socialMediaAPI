const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
})

module.exports = mongoose.connection;
