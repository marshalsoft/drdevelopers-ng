var express = require('express');
var router = express.Router();
var db = require("../db.js");
/* GET users listing. */
const images = [
  "",
  "",
  "",
  "",
  "",
  ""
]
db.images = images;
router.get('/', function(req, res, next) {
  res.render('detail/index',{siteInfo:db})
});

module.exports = router;