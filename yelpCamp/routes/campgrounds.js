var express = require("express");
var router = express.Router();
var Campground = require("../models/campground.js");
//*******************
//Campgrounds
//*******************
//INDEX
router.get("/",function(req,res){
    Campground.find({},function(error,camps){
        if(error){
            console.log("failed to retrieve all camps");
            res.send("failed to retrieve all camps");
        }else{
            res.render("campgrounds/index",{campgrounds : camps});
        }
    });
});

//CREATE
router.post("/",isLoggedIn,function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {id:req.user._id, username:req.user.username};
    var camp = {name : name, image : image, description : description, author:author};
    Campground.create(camp,function(error,insertedCamp){
        if(error){
            console.log("failed to insert camp");
        }
    });
    res.redirect("/campgrounds");
});

//NEW
router.get("/new",isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});

//SHOW
router.get("/:id",function(req,res){
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec(function(error,camp){
       if(error){
           console.log("failed to find a specific camp");
       }else{
           res.render("campgrounds/show",{campground : camp});
       }
    });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/login");
    }
}

module.exports = router;