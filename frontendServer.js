const express = require('express')
const dotenv = require('dotenv').config();
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})





const port = process.env.PORT || 6000
app.listen(port, () => console.log(`listening to ${port}...`))