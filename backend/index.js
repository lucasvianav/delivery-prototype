const cors = require('cors')
const express = require('express')

const app = express() // server app
const mongoose = require('mongoose')
const db = require('./connection') // database

// get .env file's data
require('dotenv').config()

// avoid deprecated congif
mongoose.set('useFindAndModify', false)

// request body parsers
app.use(express.json({}))
app.use(express.urlencoded({ extended: true })) // extended allows parsing any type of object

// enable requests from different origins
app.use(cors({ origin: process.env.CLIENT_URL, optionsSuccessStatus: 200 }))

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => app.listen(
    process.env.SERVER_PORT, () => console.log(`Server listening at http://localhost:` + process.env.SERVER_PORT)
))