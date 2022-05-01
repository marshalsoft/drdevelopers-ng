var Moment = require('moment');
const dt = Moment().format("YYYY");
var States = require('./states.json');
var range = [];
var data = {
  firstname:"Emmanuel ",
  lastname:"ojghon",
  email:"eojghon@gmail.com",
  mobile:"",
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
  userpassword:"Mekene$83",
  customer_service:[
    {mobile:"08000000000",email:"admin@me.com"}
  ],
  facebook:"",
  twitter:"",
  linkedin:"",
  map_embeded:"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
}
module.exports = data;