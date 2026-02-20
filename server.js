/*const express=require("express")
const app=express()
const port=5000
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})*/
const app = require("./app.js");
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});