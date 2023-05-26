const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSingleThought,
    deleteThought,
    updateThought
   

} = require('../../controllers/thoughtsController')


//api/thoughts
router.route('/').post(createThought).get(getThoughts);

router.route('/:_id').get(getSingleThought).delete(deleteThought).put(updateThought)

module.exports = router;