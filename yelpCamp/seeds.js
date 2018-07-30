var  mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var campgrounds = [
    {name: "salmon creek" , image: "https://farm2.staticflickr.com/1630/23530424244_c9664c53c6.jpg",
        description : "Feet evil to hold long he open knew an no. Apartments occasional boisterous" + 
        "as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated"+
        "my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed " + 
        "not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical."},
    {name: "granite hill" , image: "https://farm9.staticflickr.com/8746/16202066663_b3ab1ebbb2.jpg", 
    description : "Feet evil to hold long he open knew an no. Apartments occasional boisterous" + 
        "as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated"+
        "my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed " + 
        "not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical."},
    {name: "moutain goat" , image: "https://farm6.staticflickr.com/5092/5528497880_6171f21fe5.jpg",
        description : "Feet evil to hold long he open knew an no. Apartments occasional boisterous" + 
        "as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated"+
        "my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed " + 
        "not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical."}
];

var comment = {
    text : "Great! but no wifi",
    author : "CheckRaise"
}
    
    
function seedDB(){
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }else{
        /*
        console.log("removing all camps");
        campgrounds.forEach(function(camp){
            Campground.create(camp,function(err,storedCamp){
                if(err){
                    console.log(err);
                }else{
                    console.log("created campgrounds");
                    Comment.create(comment,function(err,storedComment){
                        if(err){
                            console.log(err);
                        }else{
                            storedCamp.comments.push(storedComment);
                            storedCamp.save();
                        }
                    });
                }
            });
        });
        */
    }
});
}

module.exports = seedDB;