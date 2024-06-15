const express = require('express')
const {home,signup,signin,getUser,logout} = require('../controllers/authController.js')
const jwtAuth = require('../middleware/jwtAuth.js')

const router = express.Router()

router.get('/', home)
router.post('/signup',signup)
router.post('/signin',signin)
router.get('/user',jwtAuth, getUser)
router.get('/logout',jwtAuth, logout)

module.exports = router