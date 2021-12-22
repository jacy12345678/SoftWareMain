function home(){
    navigation.classList.remove("active");
    main.classList.remove("active");
    table1.classList.remove("active");
    window.location="index.html";

}
function showclass(){
    navigation.classList.remove("active");
    main.classList.remove("active");
    table1.classList.remove("active");
    window.location="class.html";
}
function signin(){
    navigation.classList.remove("active");
    main.classList.remove("active");
    table1.classList.remove("active");
    window.location="signIn.html";
    
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
