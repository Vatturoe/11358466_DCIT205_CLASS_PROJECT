const express = require('express')
const dotenv = require('dotenv').config();
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const PatientInfoFD = require("./models/patientInfoFD")
const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})

app.use(express.json())



mongoose.connect('mongodb+srv://tormaloke:tmk$1234@mime.r03smrj.mongodb.net/newcollection?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to database')
    const port = process.env.PORT || 7000
    app.listen(port, () => console.log(`listening on port ${port}...`))
    
}).catch((error) => {
    console.log(error)
})

/*
const port = process.env.PORT || 6000
app.listen(port, () => console.log(`listening to ${port}...`))
*/