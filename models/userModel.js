const mongoose = require('mongoose')

let userInfo = mongoose.Schema({
    username:String,
    phone:Number,
    address:String,
    email:String
})

module.exports = mongoose.model('userInfo', userInfo)