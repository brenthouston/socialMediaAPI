const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');


//api/users
router.use('/users',userRoutes)

//api/thoughts
router.use('/thougths', thoughtRoutes)