let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();


document.addEventListener("DOMContentLoaded", function(){
    loaddays(currentMonth,currentYear);
})

function loaddays (Month,Year){
    let x = ["January","February","March","April","May","June","july","August",'September',"October","November","December"];
    let monthyear = document.getElementById("monthYear");
    monthyear.innerHTML= x[Month]+"  " + Year;
    
    let calendarDays = document.getElementById("caldays");
    calendarDays.innerHTML = "";

    let firstDay = new Date(Year,Month).getDay();
    let daysInMonth = 32 - new Date(Year,Month,32).getDate();
    
    let caldays = document.getElementById("caldays")
    for( let i = 0 ; i<firstDay;i++){
        let dayDiv =  document.createElement("div");
        caldays.appendChild(dayDiv)
    }

    for(let day = 1; day<=daysInMonth ; day++){
        let dayDiv =  document.createElement("div");
        dayDiv.innerHTML=day;
        dayDiv.classList="dayDiv"
        dayDiv.setAttribute("id","Day"+day)
        if (day === date.getDate() && Year === date.getFullYear() && Month === date.getMonth()) {
            dayDiv.classList.add("current-day");
          }
        caldays.appendChild(dayDiv)

        dayDiv.addEventListener("click",function(){
            localStorage.setItem("day",day)        
        });
        
    }
}
function prev (){
    currentMonth = (currentMonth === 0)? 11 : currentMonth-1;
    currentYear  = (currentMonth === 0)? currentYear-1 : currentYear;
    loaddays(currentMonth,currentYear);
}
function next (){
    currentMonth = (currentMonth === 11)? 0 : currentMonth+1;
    currentYear  = (currentMonth === 11)? currentYear+1 : currentYear;
    loaddays(currentMonth,currentYear);
}


let taskpage = document.getElementById("taskPage");
let notespage = document.getElementById("notesPage");
let calpage = document.getElementById("calPage");
let navAddButton = document.getElementById("navAddButton")
function openCal(){
    calpage.style.cssText ="visibility: visible";
    taskpage.style.cssText ="visibility: hidden";
    notespage.style.cssText ="visibility: hidden";
    navAddButton.style="visibility : visible"; 
}
function openTask(){
    calpage.style.cssText ="visibility: hidden"
    taskpage.style.cssText ="visibility: visible"; 
    notespage.style.cssText ="visibility: hidden";
    navAddButton.style="visibility : hidden";
}
function openNotes(){
    calpage.style.cssText ="visibility: hidden";
    taskpage.style.cssText ="visibility: hidden";
    notespage.style.cssText ="visibility: visible";
    navAddButton.style="visibility : hidden";
}
// document.getElementById("seeList").addEventListener("click",openTask());

let calHeader = document.getElementById("calheader")
function openTopBar(){

    let x = calHeader.style.height
    console.log(x);
    
    if (x === "2rem"){
        calHeader.style = "height:0.1px"
    }
    else{
        calHeader.style.height = "2rem"
    }
}


