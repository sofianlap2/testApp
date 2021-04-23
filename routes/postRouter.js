const router = require('express').Router()
const postCrtl = require("../controllers/postCrtl")
const {isAuth} = require('../middlewares/isAuth')
const {isAdmin} = require("../middlewares/isAuth")
const checkObjectId = require("../middlewares/checkObjectId")

router.post("/add",isAuth, postCrtl.addPost)

router.get("/all",isAuth, postCrtl.getPosts)

router.get("/byid/:id",isAuth,checkObjectId('id'), postCrtl.getPosts)

router.delete("/delete/:id", isAuth, checkObjectId('id'), postCrtl.deletePost)

router.put("/like/add/:id", isAuth, checkObjectId('id'), postCrtl.addLike)

router.put("/like/remove/:id", isAuth,checkObjectId('id'), postCrtl.removeLike)



module.exports = router