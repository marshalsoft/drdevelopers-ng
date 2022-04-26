var express = require('express');
var router = express.Router();
const db = require("../db.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  const teamList = [
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""}
  ]
  res.render('about/index',{siteInfo:db,teamList:teamList})
});

module.exports = router;