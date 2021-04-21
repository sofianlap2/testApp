require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");

const app = express()
app.use(cookieParser())

app.use(express.json())

app.use('/user', require("./routes/userRouter"))
app.use('/profile', require("./routes/profileRouter"))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err,db) {
    if(err) {
        console.log("Unable to connect to the server . Please start teh server", err)
    }
    else {
        console.log("connected to the server mongodb succesfully")
    }
} )

app.listen(PORT,()=> {console.log(`Server is running on port : ${PORT}`)})