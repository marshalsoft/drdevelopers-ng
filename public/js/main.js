window.addEventListener('scroll',(event) => {
    var top  = window.pageYOffset || document.documentElement.scrollTop,
    left = window.pageXOffset || document.documentElement.scrollLeft;
    console.log(top,"|",left);
if(top < 80)
{
$(".navbar").css("background",`rgba(255,255,255,0.${top/10})`)
$("#loginbtn").css("color",`white`)
}else{
 $(".navbar").css("background","white")
 $("#loginbtn").css("color","orange")
}
});
//
function ShowPassword(e,inp){
const show = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.41992 19.5302C9.55992 20.0102 10.7699 20.2702 11.9999 20.2702C15.5299 20.2702 18.8199 18.1902 21.1099 14.5902C22.0099 13.1802 22.0099 10.8102 21.1099 9.40018C20.7799 8.88018 20.4199 8.39018 20.0499 7.93018" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5099 12.7002C15.2499 14.1102 14.0999 15.2602 12.6899 15.5202" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47 14.5298L2 21.9998" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L14.53 9.47" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const pw = $("#"+inp);
pw.attr("type",pw.attr("type") == "text"?"password":"text");
}
function ForgotPassword(e,inp){
    const pw = $("#"+inp);
    pw.css("display",pw.css("display") == "block"?"none":"block");
}
// incredemented counter
function IncrementedCounter(id,number = 10)
{
    var initValue = 0;
    var elem = $(`#${id}`);
    var interval = setInterval(function(){ 
        if (parseInt(initValue) == parseInt(number)-1){
            clearInterval(interval);
        } 
        var ty = "";
       if(String(initValue).length >= 4)
       {
           ty = "K";
       }else if(String(initValue).length >= 6)
       {
           ty = "M";
       }
        initValue = initValue+1;
        elem.html(initValue+ty)
    },50);
}