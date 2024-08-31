function inputTask(){
    let showOption = document.getElementById("showOption") 
    let x = showOption.style.visibility;
    
    if( x === "visible"){
       showOption.style="visibility : hidden";
    }
    else{
       showOption.style="visibility : visible";
    }
   }
   
function taskPageInput(){
let showOption = document.getElementById("taskPageInput") 
    let x = showOption.style.visibility;
    
    if( x === "visible"){
    showOption.style="visibility : hidden";
    }
    else{
       showOption.style="visibility : visible";
    }
   }

   document.getElementById("closeShowoption").addEventListener("click",function(){
   let showOption = document.getElementById("showOption")
    showOption.style="visibility : hidden";
})


// to open task page from calender see list option
document.getElementById("seeList").addEventListener("click",function(){
    calpage.style.cssText ="visibility: hidden"
    taskpage.style.cssText ="visibility: visible"; 
    notespage.style.cssText ="visibility: hidden";
    showOption.style="visibility : hidden";
    navAddButton.style="visibility : hidden";    
});

// popup input option for adding task
document.getElementById("addTask").addEventListener("click",function(){
    let taskInput = document.getElementById("taskInput")
    taskInput.style="visibility : visible";
    showOption.style="visibility : hidden"
})

//Creating and adding to the task page
function addToList(){
    let taskList = document.getElementById("taskList")
    let div = document.createElement("div");
    let ul = document.createElement("ul")
    let title = document.createElement("li")
    let deadline = document.createElement("li")
    let discription = document.createElement("li")
    let span = document.createElement("span")
    span.innerHTML="\u00d7"

    //fetch value given by user
    let inputTitle = document.getElementById("input").value
    let inputDeadline = document.getElementById("deadline").value
    let inputDiscription = document.getElementById("discription").value

    let inputTitleTP = document.getElementById("inputTP").value
    let inputDeadlineTP = document.getElementById("deadlineTP").value
    let inputDiscriptionTP = document.getElementById("discriptionTP").value

    //adding properties
    div.classList="taskk"

    //store value into li 
    if(inputTitle === ""){
        title.innerHTML=inputTitleTP
        deadline.innerHTML=inputDeadlineTP
        discription.innerHTML=inputDiscriptionTP
    }
    else{
        title.innerHTML=inputTitle
        deadline.innerHTML=inputDeadline
        discription.innerHTML=inputDiscription
    }

    if(inputTitle === "" && inputTitleTP === ""){
        alert("Alert! You Submited Empty String")
    }
    else {
        
    // appending childs
    ul.appendChild(title)
    ul.appendChild(deadline)
    ul.appendChild(discription)
    div.appendChild(ul)
    div.appendChild(span)
    taskList.appendChild(div)
    }
    savedata()
    document.getElementById("showOption").style="visibility : hidden";
}

// close input form
document.getElementById("closeTaskInput").addEventListener("click",function(){  
    document.getElementById("taskInput").style="visibility : hidden"
})


// delete task from task page
let taskList = document.getElementById("taskList")
taskList.addEventListener("click",function(e){
    
    if(e.target.tagName === "INPUT"){
      e.target.parentElement.classList.toggle("Checked")
    }
    else if (e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
    }
    savedata();
});

function savedata(){
    let taskss = document.getElementById("taskList")
    localStorage.setItem("data1",taskss.innerHTML);
 }

function showData(){
    taskList.innerHTML = localStorage.getItem("data1")
}
showData()