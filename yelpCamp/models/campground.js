var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

//set up schema for campground
var campgroundSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String,
    author : {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        username : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]
});

var Campground = mongoose.model("Campground",campgroundSchema);

module.exports = Campground;