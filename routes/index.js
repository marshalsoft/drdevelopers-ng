var express = require('express');
var router = express.Router();
const db = require("../db.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  const list = [
    {id:1,title:"Jacob Jones",img:23},
    {id:2,title:"Jacob Jones",img:23},
    {id:3,title:"Jacob Jones",img:23},
    {id:4,title:"Jacob Jones",img:23},
    {id:5,title:"Jacob Jones",img:23},
    {id:6,title:"Jacob Jones",img:23},
    {id:7,title:"Jacob Jones",img:23},
    {id:7,title:"Jacob Jones",img:23},
    {id:7,title:"Jacob Jones",img:23},
    {id:8,title:"Jacob Jones",img:23}
  ]
  const stateList = [
    "",
    "",
    "",
    "",
    ""
  ]
  const agents = [
    {name:"Jacob Jones",propertyCount:23},
    {name:"Bassey Naomi",propertyCount:123},
    {name:"Anotnio Maria",propertyCount:73},
    {name:"Lucky Arnold",propertyCount:263},
    {name:"Housty Arnold",propertyCount:263}
  ]
  res.render('index',{siteInfo:db,list:list,stateList:stateList,agentList:agents});
});

module.exports = router;
