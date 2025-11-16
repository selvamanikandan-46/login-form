// express instance
const express = require ("express");
const mongoose = require ("mongoose");
const PORT =8000;
const app =express();
const userapiroute=require("./router/userRoute")
app.use(express.json());
const cors = require("cors")
app.use(cors())
const {connect} = require("http")



mongoose
.connect("mongodb://localhost:27017/sokku2")
.then(()=> console.log("Successfully connected to mongodb compass"))
.catch ((err)=> console.error("error connecting to database",err));

app.use("/user",userapiroute);

app.listen(PORT,() =>{
    console.log(`server is running on localhost:${PORT}`);
});