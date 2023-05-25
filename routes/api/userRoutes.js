const router = require('express').Router();
const {
    createUser,
    getUser,
    getSingleUser

} = require('../../controllers/userController');


//api/users
router.route('/').post(createUser).get(getUser)
router.route('/:_id').get(getSingleUser)

module.exports = router;