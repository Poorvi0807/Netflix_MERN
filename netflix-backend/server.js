const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const connection =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connetion Successfull");
    } catch (error) {
        console.log(error);
    }
   
}

app.listen(8080, async() => {
    try {
        await connection();
        console.log("Server started on port 8080");
    } catch (error) {
        console.log(error);
    }
  
});
