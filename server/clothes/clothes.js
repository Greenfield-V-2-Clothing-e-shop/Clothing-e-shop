var mongoose =require("mongoose")
const db=require("../db/index")

mongoose.Promise=global.Promise



var clothes= mongoose.Schema({
    name: String,
    brand:String,
    price:Number,
    imageUrl:String,
    size:String,
    color:String,
    favorites:{ type: Boolean, default: false }
})



var clothes= mongoose.model("clothes",clothes)


module.exports=clothes