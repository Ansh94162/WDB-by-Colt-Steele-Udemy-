var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
//Adding a new cat to the data base
// var george = new Cat({
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("Something Went Wrong!")
//     } else {
//         console.log("We Just Saved A cat To the DATABASE:")
//         console.log(cat);
//     }
// });

//Alternate way of creating cat

Cat.create({
    name:"Snow White",
    age:15,
    temperament:"Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
})

//Retrieving all Cats from Database and console.log each one

// Cat.find({},function(err, cats){
//     if(err){
//         console.log("OH NO ERROR");
//         console.log(err);
//     } else {
//         console.log("ALL THE CATS");
//         console.log(cats);
//     }
// })