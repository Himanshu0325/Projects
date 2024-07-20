var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");

bt2.addEventListener("mouseover", function(){
    bt1.innerText ="NO"
    bt2.innerText ="YES"
    bt1.style.backgroundColor ="white"
    bt2.style.backgroundColor ="aqua"
});
bt2.addEventListener("mouseleave", function(){
    bt1.innerText ="YES"
    bt2.innerText ="NO"
    bt1.style.backgroundColor ="aqua"
    bt2.style.backgroundColor ="white"
});