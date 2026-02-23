const express=require("express");
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();
/*const MongoDB = require("./Config/db.js")
MongoDB();*/


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MOngoDB Connect Successfully");
})
.catch(()=>{
    console.log("MongoDB Connection Failed")
})

app.use(express.json());


const userRoutes = require("./routes/userRoutes.js");


app.use("/api/users",userRoutes);

module.exports = app;