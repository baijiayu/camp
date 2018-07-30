var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds"),
    Comment = require("./models/comment"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user");
    
var commentRoute = require("./routes/comments.js"),
    campgroundRoute = require("./routes/campgrounds.js"),
    indexRoute = require("./routes/index.js");
    
//use bodyparser
app.use(bodyparser.urlencoded({extended : true}));
//use stylesheets
app.use(express.static(__dirname + "/public"));
//connect to mongoose
mongoose.connect("mongodb://localhost/yelp_camp");
//use ejs as template
app.set("view engine", "ejs");
//seed to db
//seedDB();

//Passport configuration
app.use(require("express-session")({
    secret : "whatever it will work",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//pass in currentUser to all pages
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/campgrounds/:id/comments",commentRoute);
app.use("/campgrounds",campgroundRoute);
app.use("/",indexRoute);
// =========
// Express Initialization
// =========
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("camp has started")
});