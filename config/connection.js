const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log("connected to DB");
})

module.exports = mongoose.connection;
