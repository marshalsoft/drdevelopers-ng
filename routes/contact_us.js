var express = require('express');
var router = express.Router();
const db = require("../db.js");
const func = require("../func");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact_us/index',{siteInfo:db})
});
router.post('/', function(req, res, next) {
var params = Object.assign(db,req.params,req.query,req.body);
  func.SubMitContacUs(params).then((re)=>{
    params.error = re.error;
    res.render('contact_us/index',{siteInfo:params})
  })
});

module.exports = router;