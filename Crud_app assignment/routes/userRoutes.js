const express = require("express")
const {home,registerUser,loginUser} = require("../controllers/userControllers.js")

const router = express.Router()
router.get("/", home)
router.post('/registeruser',registerUser);
router.post('/loginuser', loginUser);


module.exports = router