var express = require('express');
var router = express.Router();
var db = require("../db.js");
var func = require("../func.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.title = "Login";
const params = Object.assign(db,req.params,req.query,req.body);
  res.render('login/index',{siteInfo:params})
});
router.post('/', async function(req, res, next) {
db.title = "Login";
var params = await Object.assign(req.params,req.query,req.body,db);
if(!func.EmailValid(params.email))
{
  params.error = "Please enter a valid email address.";
}
if(params.email == "")
{
  params.error = "Please enter a valid email address.";
}else if(params.password == "")
{
  params.error = "Password is required.";
}
if(params.error == "")
{
  res.render('dash/index',{siteInfo:params})  
}
if(params.email == params.useremail && params.password == params.userpassword)
{
  res.redirect('login/index',{siteInfo:params}) 
  return ;
}else{
  res.render('login/index',{siteInfo:params})  
} 

});
module.exports = router;