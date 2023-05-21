const router = require('express').Router();
const {
    createUser,

} = require('../../controllers/userController')

router.route('/api/users').post(createUser)