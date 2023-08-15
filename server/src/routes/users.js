const express = require('express')
const router = express.Router()

const {registerNewUser, userLogin} = require('../controllers/users')
 
router.post('/registers', registerNewUser)
router.post('/logins', userLogin)
// router.get('/users', getAllUser)
// router.get('/users/:id', getSpecificUser)
// router.delete('/users/:id', deleteSpecificUser)
// router.put('/users/:id', updateSpecificUser)

module.exports = router 