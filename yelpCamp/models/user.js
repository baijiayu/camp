var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");
var passportMongoose = require("passport-local-mongoose");

//set up schema for campground
var UserSchema = new mongoose.Schema({
    username : String,
    password : String,
});
UserSchema.plugin(passportMongoose);
var User = mongoose.model("User",UserSchema);

module.exports = User;