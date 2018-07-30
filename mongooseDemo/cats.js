var mongoose = require("mongoose");

//connect to a database server
mongoose.connect("mongodb://localhost/cat_app");

//define cat schema
var catSchema = new mongoose.Schema({
    name : String,
    age : Number,
    temperament : String
});
var Cat = mongoose.model("Cat",catSchema);

var george = new Cat({
    name : "johnny",
    age : 13,
    temperament : "friendly"
});
/*
// add cat to the database
george.save(function(error,cat){
    if(error){
        console.log("something went wrong");
    }else{
        console.log("saved a cat");
        console.log(cat);
    }
});
*/

//retrieve cat from the database
Cat.find({},function(error,cats){
   if(error){
       console.log("failed to retrieve cats");
   }else{
       console.log("all cats");
       console.log(cats);
   }
});

//create and save
Cat.create({
    name : "white",
    age : 8,
    temperament : "nice"
},function(error,cat){
    if(error){
        console.log("something went wrong");
    }else{
        console.log("saved a cat");
        console.log(cat);
    }
});
