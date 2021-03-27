const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
var item = "";
var items =[];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  var today = new Date();

  var options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindofday: day, newListItems:items});
});

app.post("/" ,function(req, res){
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});


//   res.sendFile(__dirname + "/index.html");
// });



app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
