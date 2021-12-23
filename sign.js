var account=document.getElementById("account").value;
function enter(){
    account=document.getElementById("account").value;
    console.log(document.getElementById("account").value);
}
var login=document.getElementById("login");
login.addEventListener("click",enter);