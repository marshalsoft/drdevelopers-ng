var express = require('express');
var router = express.Router();
const db = require("../db.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  const searchList = [
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""},
    {name:"Jonse",post:"",link:""}
  ]
  res.render('search/index',{siteInfo:db,searchList:searchList})
});

router.post('/', function(req, res, next) {
    const searchList = [
      {id:"",name:"Jonse",post:"",link:""},
      {id:"",name:"Jonse",post:"",link:""},
      {id:"",name:"Jonse",post:"",link:""},
      {id:"",name:"Jonse",post:"",link:""},
      {id:"",name:"Jonse",post:"",link:""}
    ]
    res.render('search/index',{siteInfo:db,searchList:searchList})
  });
module.exports = router;