const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require("./config/db")

 connectDB()  
 app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require('cors');
app.use(cors());
app.use('/mangas', require('./routes/mangaRoutes'))

app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
    console.log("Server started on port 8000")
})

