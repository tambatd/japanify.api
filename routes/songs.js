var express = require('express');
var router = express.Router();

/* GET songs listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "spotify:track:6fUs4sionsOWPPk4wnDHG6"},
    {id: 1, username: "spotify:track:0OKaPDf7ljRTHyEWfIEICn"}
  ]);
});

/*router.post('/', function(req, res, artists, next){
    res.json([
        {id: 1, username: "spotify:track:6fUs4sionsOWPPk4wnDHG6"},
        {id: 1, username: "spotify:track:0OKaPDf7ljRTHyEWfIEICn"}
      ]);
    
})*/


module.exports = router;