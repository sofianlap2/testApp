const jwt = require("jsonwebtoken")
const User = require('../models/User')


const isAuth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) return res.status(400).json({ msg: "Invalid authentification." })

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) throw err;
            req.user = user;
            next()
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const isAdmin = async(req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) return res.status(400).json({ msg: "Invalid authentification." })
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await  User.findById(decoded.id).select('-passwordHash')
        if (!user) {
            return res.status(401).json({ msg: " authorization denied" });
        }
        if (user.role !== 1) {
            return res.status(401).json({ msg: 'is not admin' });
        }
        req.user = user
        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


module.exports = { isAuth, isAdmin }