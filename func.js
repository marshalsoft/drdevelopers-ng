const EmailValid = function ()
{

return true;
}
const SubMitContacUs = function (data)
{
return new Promise((resolve)=> {
    resolve({error:"welcome"})
})
}
module.exports = {
    EmailValid:EmailValid,
    SubMitContacUs:SubMitContacUs  
}