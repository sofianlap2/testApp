const router = require('express').Router()
const userCrtl = require("../controllers/userCrtl")
const {isAuth} = require("../middlewares/isAuth")
const {isAdmin} = require("../middlewares/isAuth")


router.post('/register', userCrtl.Register)

router.post('/login', userCrtl.Login)

router.get('/current', isAuth, userCrtl.getCurrent)

router.get('/allUsers',isAdmin, userCrtl.getAllUsers )


module.exports = router