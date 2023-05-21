const router = require('express').Router();
const postRoutes = require('./thoughtRoutes');
const tagRoutes = require('./userRoutes');

router.use('/thoughts', thougthtRoutes);
router.use('/user', userRoutes);

module.exports = router;
