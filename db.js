var Moment = require('moment');
const dt = Moment().format("YYYY");
var States = require('./states.json');
var range = [];
var data = {
  title:"Home",
  description:"",
  author:"Marshalsoft",
  developer:"Marshalsoft Developers",
  author_website:"http://www.marshalsoft.pro",
  copyright:`Drdevelopers © ${dt}`,
  host:"www.drdevelopers.ng",
  appname:"Drdevelopers",
  logo:"images/nav_logo.svg",
  logo_with_text:"images/company_name.svg",
  whitelogo:"images/whitelogo.svg",
  facebook:"",
  twitter:"",
  instagram:"",
  linkedin:"",
  error:"",
  stateList:States,
  priceRange:range,
  action:"",
  useremail:"admin@marshalsoft.net",
  userpassword:"Mekene$83"
}
module.exports = data;