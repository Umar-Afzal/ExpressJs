const path = require('path');
var express = require('express');
var app = express();
const port = 8000;

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticpath = path.join(__dirname,"../public");
//How to used static path...
app.use(express.static(staticpath))

app.get('/', (req, res) => {
    res.send("This is my First Home Page");
})

app.listen(port, () => {
    console.log("server on listening on 8000");
})