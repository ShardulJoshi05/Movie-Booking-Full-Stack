const express  = require('express');
const app = express();

app.get("/movies",(req, res, next)=>{
    res.send("All Movies Data in JSON format from Mongo DB")
})
app.get("/genres",(req, res, next)=>{
    res.send("All genres Data in JSON format from Mongo DB")
})
app.get("/artists",(req, res, next)=>{
    res.send("All artists Data in JSON format from Mongo DB")
})

app.listen(9000);
