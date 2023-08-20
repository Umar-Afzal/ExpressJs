const path = require('path');
var express = require('express');
var app = express();
const port = 8000;

// Templates Engine  (Templates engine are used to send dynamic data on html file)
//hbs,pug,handlebar "Templates engine used"
app.set('view engine', 'hbs');
app.get('/',(req,res)=>{
    res.render("index",{
        FirstVariable:"Umar Afzal"
    });
})

//Use Middleware To publish a static website 
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath))

app.get('/', (req, res) => {
    res.send("This is my First Home Page");
})

app.listen(port, () => {
    console.log("server on listening on 8000");
})