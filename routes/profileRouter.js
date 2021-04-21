const router = require('express').Router()
const profileCrtl = require("../controllers/profileCrtl")
const {isAuth} = require('../middlewares/isAuth')
const {isAdmin} = require("../middlewares/isAuth")


router.post("/add", isAuth, profileCrtl.addProfile)

router.get("/me", isAuth, profileCrtl.getProfile)

router.get("/all", isAdmin, profileCrtl.getAllProfiles)

router.delete("/delete", isAdmin, profileCrtl.deleteProfileUser)

router.put("/experience", isAuth, profileCrtl.addExperience)

router.delete("/experience/:expId", isAuth, profileCrtl.deleteExperience)

router.put("/education", isAuth, profileCrtl.addEducation)

router.delete("/education/:expId", isAuth, profileCrtl.deleteEducation)





module.exports = router;