const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

const connectDB = async () => {
   try {
        const conn = await mongoose.connect(uri)
        console.log("mongoDB connected")
   }catch (error) {
       console.log(error)
       process.exit(1)
   }
}

module.exports = connectDB
   