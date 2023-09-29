const express = require('express')
const router = express.Router()

const {registerNewUser, userLogin, userMPIN, getAllUser, getSpecificUser, deleteSpecificUser} = require('../controllers/users')
 
router.post('/registers', registerNewUser)
router.post('/logins', userLogin)
// router.post('/:id', userMPIN)
router.get('/users/:id', getSpecificUser)
router.get('/users', getAllUser)
// router.put('/changePassword/:userId', changePassword)
router.delete('/users/:id', deleteSpecificUser)


module.exports = router   