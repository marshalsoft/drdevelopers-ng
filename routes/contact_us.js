var express = require('express');
var router = express.Router();
const db = require("../db.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact_us/index',{siteInfo:db})
});

module.exports = router;