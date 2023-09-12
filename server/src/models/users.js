const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String, 
    phoneNumber: String,
    gender: String,
    MPIN: String,
    password: String,
    balance: {type: Number, default: '10000'}
});
    
const Users = mongoose.model('Users', userSchema);

module.exports = Users