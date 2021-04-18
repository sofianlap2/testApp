const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim:true,
        unique: true
    },
    passwordHash: {
        type: String,
        required:  [true, "Please enter your password"]
    },
    role : {
        type: Number,
        default : 0  // user = 0 // admin =1
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dnba3zc9i/image/upload/v1617730318/samples/people/boy-snow-hoodie.jpg"
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema)
module.exports = User