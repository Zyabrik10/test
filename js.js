const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var img = '';

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",(req, res)=>{
  res.render("index", {img:img,__dirname:__dirname});
});

app.post("/", (req, res)=>{
  img = req.body.img;
  for (var i = 0; i < img.length;  i++){
    img[i] = "img/" + img[i];
  }
  res.render("index", {img:img, __dirname: __dirname});
});

app.listen(3000, "localhost", ()=>{
  console.log("server is on");
});