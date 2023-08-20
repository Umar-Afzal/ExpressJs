var express = require('express');
var app = express();
const port = 8000;
app.get('/',(req,res)=>{
    res.send("This is my home page")
})
app.get('/about',(req,res)=>{
    res.send("This is my about page")
})
app.get('/contact',(req,res)=>{
    res.send("This is my contact page")
})
app.get('/services',(req,res)=>{
    res.send("This is my services page")
})
app.get('*',(req,res)=>{
    res.send("This page is not found")
})
app.listen(port,()=>{
    console.log("server on listening on 8000");
})