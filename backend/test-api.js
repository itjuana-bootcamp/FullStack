// const express = require("express");

// const app = express();
// const PORT = 4000;

// app.get("/", (req, res) => {
//   res.json({ text: "Hello World!" });
// });

// app.get("/about-us", (req, res) => {
//   res.json({ about_us: "iTjuana" });
// });

// app.listen(PORT, () => {
//   // console.log('Listening on port: ' + PORT )
//   console.log(`Listening on port: ${PORT}`);
// });
const express = require('express');

const app = express();
const PORT = 4000;

//utilizamos get para hacer fetch con loq ue haya en el server
//(req, ser) podria ser (a, b)
app.get("/", (req, res) => {
    res.json({ text: "Hello world!"});
});

app.get('/about-us', (req, res) => {
    res.json({ about_us: "iTijuana"});
});

app.listen( PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
    // console.log('Listening on port: ' + PORT);
});