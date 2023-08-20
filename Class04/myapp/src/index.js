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
    res.write("<h1>This is my First Heading</h1>");
    res.send();
})
app.get('/about', (req, res) => {
    res.send("This is my about page")
})
app.get('/contact', (req, res) => {
    res.send("This is my contact page")
})
// app.get('/temp', (req, res) => {
//     res.send([
//         {
//             id: 1,
//             Name: "Umar Afzal"
//         },
//         {
//             id: 2,
//             Name: "Asad Ali"
//         },
//         {
//             id: 3,
//             Name: "Umar Afzal"
//         },
//     ])
// })
app.get('/temp', (req, res) => {
    res.json([
        {
            id: 1,
            Name: "Umar Afzal"
        },
        {
            id: 2,
            Name: "Asad Ali"
        },
        {
            id: 3,
            Name: "Umar Afzal"
        },
    ])
})
app.get('*', (req, res) => {
    res.send("This page is not found")
})




app.listen(port, () => {
    console.log("server on listening on 8000");
})