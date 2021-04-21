const router = require('express').Router()
const userCrtl = require("../controllers/userCrtl")
const {isAuth} = require("../middlewares/isAuth")
const {isAdmin} = require("../middlewares/isAuth")


router.post('/register', userCrtl.Register)

router.post('/login', userCrtl.Login)

router.get('/current', isAuth, userCrtl.getCurrent)

router.get('/allUsers', isAdmin, userCrtl.getAllUsers)

router.delete('/delete/:userId', isAdmin, userCrtl.deleteUser)

router.put('/edit/:userId', isAdmin, userCrtl.editUser)

module.exports = router