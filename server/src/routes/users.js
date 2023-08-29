const express = require('express')
const router = express.Router()

const {registerNewUser, userLogin, changePassword} = require('../controllers/users')
 
router.post('/registers', registerNewUser)
router.post('/logins', userLogin)
// router.put('/changePassword/:userId', changePassword)
// router.get('/users', getAllUser)
// router.get('/users/:id', getSpecificUser)
// router.delete('/users/:id', deleteSpecificUser)


module.exports = router 