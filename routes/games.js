const express   = require("express"),
      router    = express.Router();

    



router.get("/ticTacToe", function(request, response){
    response.render("games/ticTacToe");
});


module.exports = router;