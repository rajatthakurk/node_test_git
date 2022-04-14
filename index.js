const express = require("express");
const app = express();
const mongoose = require("mongoose");
let pM = require("./models/profile.model");
let gM = require("./models/games.model");

let db = mongoose.connection;

db.on("error",() => console.log("error in db"));
db.once("open",() => console.log("mongoDB started conencted"))

mongoose.connect("mongodb://localhost:27017/user")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/",async (req,res) => {
    let result = await new pM(req.body);
    result.save()
    res.send(result)
})

app.get("/",async (req,res) => {
    let result = await  pM.find();
    res.send(result);
 }); 
 

 app.get("/some",(req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'})
     for(let i = 0; i< 5;i++){
         res.write(`
         <h2>WELCOME PAGE</h2>
         <input type="file">
         `);
     }
     res.end()
 })

 app.post("/rdbms",async function(req,res) {
     let hobby = req.body.hobby
     delete req.body["hobby"];
     let profile = await new pM(req.body);
     profile.save();

     let game  = await new gM({id:profile._id, hobby});
     game.save()

     res.send({profile,game})
 })


app.listen(3001,() => console.log("listening on port : 3001"))