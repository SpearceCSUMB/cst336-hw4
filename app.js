const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// Rowan Nikolaus

var faker = require('faker');
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var personalImage = faker.image.avatar();
var fullName = firstName + " " +  lastName;
var job  = faker.name.jobTitle();

app.get("/", function(req,res) {
  res.render("index.html");
});

app.get("/nintendo", function(req, res) {
  res.render("nintendo.html");
});

app.get("/valve", function(req, res) {
  res.render("valve.html");
});

app.get("/rockstar", function(req, res) {
  res.render("rockstar.html");
});

app.get("/display.ejs", function(req, res) {
  res.render("display.ejs", { data2: fullName, data1: personalImage, data3: job});             
});

// JSON.stringify({data2: arrayData, data1: JSONdata})

//server listener
app.listen("8081", "0.0.0.0", function(){
  console.log("Express server is Running");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Running Express Server...");
});



//console.log(randomSentence);

//console.log(Faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."
