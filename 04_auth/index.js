const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())
