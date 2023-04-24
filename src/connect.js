const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl ="mongodb+srv://sahithya:sahithya@cluster0.xtchkwg.mongodb.net/test"

mongoose.connect(mongoUrl,{
    useNewUrlParser: true
}).then(()=>{console.log("Connected to database");})
.catch(e=>console.log(e));

require("./imageDetails");

const Images = mongoose.model("ImageDetails");

app.post("/upload-image",async(req,res)=>{
    const {base64} = req.body;
    try{
        Images.create({image:base64});

        res.send({Status: "ok"});
    }
    catch(error){
        res.send({Status: "error",data:error});
    }
})