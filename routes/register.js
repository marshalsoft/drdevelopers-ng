var express = require('express');
var router = express.Router();
var db = require("../db.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.title = "Register";
  res.render('login/index',{siteInfo:db})
});

module.exports = router;