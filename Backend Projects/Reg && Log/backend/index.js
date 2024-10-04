const express = require('express');
// const bodyParser = require('body-parser')
const {urlencoded} = require('express'); //
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000
const connect = require('./config/db')

connect()
const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/', require('./routes/routes.js'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})