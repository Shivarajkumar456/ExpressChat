const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const login = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(login)

app.listen(3000);