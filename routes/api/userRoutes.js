const router = require('express').Router();
const {
    createUser,
    getUser,
    getSingleUser,
    deleteUser,
    updateUser

} = require('../../controllers/userController');


//api/users
router.route('/').post(createUser).get(getUser)
router.route('/:_id').get(getSingleUser).delete(deleteUser).put(updateUser)

module.exports = router;