const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
var port = 8000;


//handelbar used to publish dynamic website and componenets based connection

const tempalepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials")
const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath));

app.set("views",tempalepath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialspath)

app.get('/',(req,res)=>{
    res.render("index",{
        firstName:"First render Components"
    });
})
app.get('/about',(req,res)=>{
    res.render("about");
})


app.get('/',(req,res)=>{
    res.send('This page tell about partials')
})
app.listen(port,()=>{
    console.log('App on Listening on Port 8000')
})