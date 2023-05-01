const express = require("express")
const mongoose = require("mongoose")
const router = require('./routes/postRoutes.js');
require("dotenv").config()
const app = express()

mongoose.connect("mongodb://root:mongoose@super-mongo:27017/?authSource=admin")
.then(()=>console.log("successfully connected"))
.catch(err=>console.log(err))
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/post",router)

app.get("/",(req,res)=>{
    res.send("<h2>Learn Docker compose</h2>")
})



app.listen(PORT,()=>console.log(`server running on port ${PORT}`))