
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()


const port = process.env.PORT || 8000

const app = express()

// middleware for bodyparser
app.use(bodyParser.urlencoded({extended: false}))

// get settings
const settings = require('./config/settings')

// mongo db url
const db = settings.mongoDBUrl

// attempt to connect with DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.log(err))

// Get profile routes
const profile = require('./routes/api/profile')

// app.get('/', (req, res) => {
//     res.send('Project is Running')
// })


app.get("/job", (req, res) => {
    res.send("<h1>" + process.env.SAMPLE_STRING +"</h1>")
})

// actual routes
app.use('/api/profile', profile)

app.listen(port, () => console.log(`App running at port : ${port}`))






/****************************************************************************** 
*** 
* ITE5315 – Assignment 4 
* I declare that this assignment is my own work in accordance with Humber Academic Policy. * 
No part of this assignment has been copied manually or electronically from any other source * 
(including web sites) or distributed to other students. 
* 
* Name: ______parmeet singh____n01511008_____ Student ID: ____3/25/2023__________ Date: ____________________ 
* 
* 
******************************************************************************
**/

