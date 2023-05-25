const router = require('express').Router();
const {
    createThought,

} = require('../../controllers/thoughtsController')

router.route('/api/thoughts').post(createThought)

module.exports = router;