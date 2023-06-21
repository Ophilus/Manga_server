const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require("./config/db")

 connectDB()  
 app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/mangas', require('./routes/mangaRoutes'))

app.listen(3000, () => {
    console.log("Server started on port 8000")
})

