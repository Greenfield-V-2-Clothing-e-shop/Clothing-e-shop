
var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

var usersSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    card:{type:Number, default:0}
});
 

module.exports = mongoose.model("users",usersSchema);