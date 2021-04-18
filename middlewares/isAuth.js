const jwt = require("jsonwebtoken")


const isAuth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) return res.status(400).json({ msg: "Invalid authentification." })

        jwt.verify(token, process.env.JWT_SECRET, (err,user)=> {
            if(err) throw err;
            req.user = user;
            next()
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = isAuth