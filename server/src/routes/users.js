const express = require('express')
const router = express.Router()

const {registerNewUser, userLogin, userMPIN, getAllUser, getSpecificUser} = require('../controllers/users')
 
router.post('/registers', registerNewUser)
router.post('/logins', userLogin)
// router.put('/userMPIN/:userId', userMPIN)
router.get('/users/:id', getSpecificUser)
router.get('/users', getAllUser)
// router.put('/changePassword/:userId', changePassword)
// router.delete('/users/:id', deleteSpecificUser)


module.exports = router 