var express = require('express');
var router = express.Router();
const db = require("../db.js");
/* GET users listing. */
db.title = "Dashboard";
const blogs = [
  {id:1,title:"Exercitation veniam",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",img:"./images/bld2.png"},
  {id:1,title:"Exercitation veniam",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",img:"./images/bld2.png"},
  {id:1,title:"Exercitation veniam",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",img:"./images/bld2.png"},
  {id:1,title:"Exercitation veniam",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",img:"./images/bld2.png"}
]
router.get('/', function(req, res, next) {
  res.render('dashboard/index',{siteInfo:db,blogs:blogs})
});

module.exports = router;