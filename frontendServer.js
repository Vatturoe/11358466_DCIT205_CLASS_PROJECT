const express = require('express')
const dotenv = require('dotenv').config();
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const PatientFDInfo = require("./models/patientInfoFD.js")
const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})

app.use(express.json())

app.post('/frontdesk/patient/entry', async(req, res) => {
    try {
        const patientInfo = await PatientFDInfo.create(req.body)
        res.status(200).json(patientInfo);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})



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