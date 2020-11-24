const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose");


//*route dependencies
const authRoutes  = require("./routes/index"),
      gameRoutes  = require("./routes/games");


//*app setup
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


//===================================
// Route calls
//===================================
app.use("/", authRoutes);
app.use("/games", gameRoutes);



let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Gmaes are running on port 3000");
})