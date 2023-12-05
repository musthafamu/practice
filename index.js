const express=require('express');
const dotenv=require('dotenv').config()
const app=express();

app.get('/',(req,res)=>{
    res.send("<h2>how are you, are u okaay</h2>")
});

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`port is connectd at ${port}`);
});