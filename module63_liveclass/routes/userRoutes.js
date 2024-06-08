const express = require("express")

const {home, createUser, getUsers, deleteUsers, editUser} = require("../controllers/userControllers.js")


const router = express.Router()
router.get("/", home)
router.post('/createuser',createUser)
router.get('/getusers',getUsers)
router.put('/editusers/:id',editUser)
router.delete('/deleteuser/:id', deleteUsers)
//.put/.patch
module.exports = router