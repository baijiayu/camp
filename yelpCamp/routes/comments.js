var express = require("express");
var router = express.Router({mergeParams:true});
var Campground = require("../models/campground.js");
var Comment = require("../models/comment.js");
// =========
// COMMENTS ROUTE
// =========

//NEW : for new comments
router.get("/new",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {camp : camp});
        }
    })
});

//CREATE : for new comment
router.post("/new",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }else{
            var comment = req.body.comment;
            //add username and id to comment
            Comment.create(comment,function(err,comment){
                //save username and userId
                var username = req.user.username;
                var userId = req.user._id;
                console.log("username"+username);
                console.log("userId"+userId);
                comment.author.id = userId;
                comment.author.username = username;
                //save comment
                comment.save();
                camp.comments.push(comment);
                camp.save();
                res.redirect('/campgrounds/'+camp._id);
            });
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