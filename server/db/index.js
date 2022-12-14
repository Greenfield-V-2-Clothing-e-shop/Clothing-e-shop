var mongoose = require("mongoose");
var mongoUri = "mongodb+srv://yaya:yaya2410@cluster0.er8lspc.mongodb.net/?retryWrites=true&w=majority";
// mongoose.set("strictQuery", false);
mongoose.connect(mongoUri, () => {
  console.log("Database connected yaaayyyyy");
});

var db = mongoose.connect(mongoUri);

module.exports = db;