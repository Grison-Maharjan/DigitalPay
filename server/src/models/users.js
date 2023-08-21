const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: String, 
    phoneNumber: String,
    password: String,
    gender: String,
    email: String,
    balance: {type: Number, default: '10000'}
});
    
const Users = mongoose.model('Users', userSchema);

module.exports = Users