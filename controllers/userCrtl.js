const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require("../models/User")


const userCrtl = {
    Register: async(req,res) => {
        const {name,email,password} = req.body
        try {
            if(!email || !password || !name) return res.status(400).json({error: "Please enter all fields"})
            if(!validateEmail(email)) return res.status(400).json({error: "Please verify your email address"})
            if(password.length < 6 ) return res.status(400).json({error: "Password must be at least with 6 characters"})

            const existingUser = await User.findOne({email})
            if(existingUser) return res.status(400).json({error: "This email is already registred"})

            const salt = await bcrypt.genSalt(10)
            const passwordHashed = await bcrypt.hash(password, salt)

            const newUser = new User({
                name,
                email,
                passwordHash: passwordHashed
            })
            const savedUser = await newUser.save()
            res.json(savedUser)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    Login: async(req,res)=> {
        const {email,password} = req.body

        try {
            if(!email || !password) return res.status(400).json({error: "Please enter all fields"})
            
            const existingUser = await User.findOne({email})
            if(!existingUser) return res.status(400).json({error: "Invalid credentials"})

            const isMatch = await bcrypt.compare(password, existingUser.passwordHash)
            if(!isMatch) return res.status(400).json({error: "Invalid credentials"})

            const payload = {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                role: existingUser.role,
                avatar: existingUser.avatar
            }

            jwt.sign(payload, process.env.JWT_SECRET, (err,token) => {
                if(err) throw err;
                res.json({token: token})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getCurrent: (req,res)=>{ try {
        res.json(req.user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }}
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = userCrtl;