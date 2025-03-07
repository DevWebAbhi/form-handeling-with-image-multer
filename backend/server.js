const express = require("express");

const app = express();

const upload = require("./multer");

const cors = require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    try {
        return res.status(200).send({message:"This Form handeling backend"});
    } catch (error) {
        return res.status(500).send({message:"Something went wrong",error});
    }
})

app.post("/post",upload.single("image"),(req,res)=>{
    try {
        const {name} = req.body;
        console.log(req.file,req.files);
        return res.status(200).send({message:"Data sucessfully received"});
    } catch (error) {
        return res.status(500).send({message:"Something went wrong",error});
    }
})



app.listen(3001,()=>{
    console.log("server connected sucessfully")
})