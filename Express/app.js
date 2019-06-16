//Initialize Express
var express = require("express");
var app = express()
//Routes
app.get("/",function(req, res){res.send("Hi There!!!");});
app.get("/bye",function(req, res){res.send("GoodBye");});
app.get("/cat",function(req, res){res.send("Meow");});
//Variable Route
app.get("/r/:subredditname",function(req, res){
    var subreddit = req.params.subredditname;
    res.send("WELCOME TO THE " + subreddit + " SUBREDDIT!");});
//Route Used when Unspecified Route is Asked    
app.get("*",function(req, res){res.send("<h1>Error 404 Not Found</h1>");});
//Start Server PORT
app.listen(3000,function(){
    console.log("Server Has Started");
})