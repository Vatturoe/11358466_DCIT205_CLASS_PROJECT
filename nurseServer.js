const express = require('express')
const dotenv = require('dotenv').config();
const nodemon = require('nodemon')
const app = express();




const port = process.env.PORT || 6000
app.listen(port, () => console.log(`listening to ${port}...`))