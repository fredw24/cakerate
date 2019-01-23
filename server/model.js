const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/myapp', (err)=>{
    console.log("Connected to Mongodb", err);
})

const RatingSchema = new mongoose.Schema({
    review: {type:String},
    stars: {type:Number}
})

const CakeSchema = new mongoose.Schema({
    bakerName: {type:String, minlength:[3,"Longer name pleeeease!"]},
    imgUrl: {type:String, required:[true, "Image link pleeeease!!!!!!"]},
    ratings: [RatingSchema]
}, {timestamps:true})

module.exports = mongoose.model("Cake", CakeSchema);