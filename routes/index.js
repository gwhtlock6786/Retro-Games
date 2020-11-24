const express = require("express"),
      router  = express.Router(),
      passport = require("passport");



//*home page 
router.get("/", function(request, response){
    response.render("home");
});


module.exports = router;