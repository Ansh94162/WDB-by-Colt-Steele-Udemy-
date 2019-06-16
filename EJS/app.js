
var express = require("express");
var app = express();
//Tell the server that we are using public folder for css
app.use(express.static("public"));
//We do not need to tell server that we are using ejs Files
app.set("view engine","ejs"); 

app.get("/",function(req, res){
    res.render("home");
});


app.get("/love/:thing",function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingvar : thing});
});

app.get("*",function(req, res){
    res.send("<h1>Error 404 Not Found</h1>");
});


app.listen(3000,function(){
    console.log("Server Has Started");
})