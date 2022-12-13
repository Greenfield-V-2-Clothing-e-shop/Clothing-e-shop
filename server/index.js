var express = require('express');
var cors=require("cors")

var app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '../client/public'));




app.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to the car RESTful API!' });
});

app.use("/api/car", require("./car/carRouter"));
app.use("/api/users", require('./usersRoutes/usersRoutes.js'))


var PORT = 4000;

app.listen(PORT, function () {
  console.log('car RESTful API listening on http://localhost:' + PORT);
});
