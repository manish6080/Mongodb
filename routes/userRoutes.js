const express = require('express')
let router = express.Router()
let userController = require('../controllers/userController.js')

router.post('/save', userController.userSave)
router.get('/getData', userController.getUser)

module.exports = router;