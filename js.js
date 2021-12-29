var mainaccount;
var mainpw;
var classArraay=[];	
var studentID=[];
var studentName=[];
var studentState=[];
var teachername;
var indexclass;
function signin(){
    navigation.classList.remove("active");
    main.classList.remove("active");
    table1.classList.remove("active");
}
let toggle=document.querySelector(".toggle");
let navigation=document.querySelector('.nevigation');
let main=document.querySelector('.main');
let table1=document.querySelector('.table1');
toggle.onclick=function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    table1.classList.toggle("active");  
}
const selectElement = document.querySelector('.select1');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.lable');
  result.textContent = `${event.target.value}`;
});
function addclass(){
    for(var i=2;i<classArraay.length;i++){
        document.myForm.member.options[i-2]=new Option(classArraay[i]);	// 設定新選項
        document.myForm.member.length=classArraay.length-2;
    }

    
}

function classchange(index){
  indexclass=classArraay[index+2];
  console.log(indexclass);
  document.getElementById("Name").innerHTML=""
  var newP = document.createElement("a");
  var textNode = document.createTextNode(indexclass);
  newP.appendChild(textNode);
  document.getElementById("Name").appendChild(newP);
}
function setname(){
  let tname=document.getElementById("tname");
  tname.textContent=teachername;
}
function printClassName(){
  
}

