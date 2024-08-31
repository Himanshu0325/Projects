

function createPage(){

    function count(){
        let count = localStorage.getItem("count") ;
        count ++;
        localStorage.setItem("count",count)
        return count
    }
    let counts = count()

    let pageBox = document.createElement("div")
    let titleBox = document.createElement("div")
    let pageTitle = document.createElement("h1")
    let span = document.createElement("span")
    let page = document.createElement("p")
    let notesContainer = document.getElementById("notesContainer")

    pageBox.setAttribute("id","pageBox" + counts)
    pageBox.classList="pageBox"
    titleBox.classList="titleBox"
    pageTitle.classList="pageTitle"
    span.setAttribute("id","closePage")
    span.innerHTML="..."
    span.setAttribute("onclick","closePage()")
    page.setAttribute("contenteditable","true")
    page.setAttribute("id","page")

    pageTitle.innerHTML = document.getElementById("fetchTitle").value

    titleBox.appendChild(pageTitle)
    titleBox.appendChild(span)
    pageBox.appendChild(titleBox)
    pageBox.appendChild(page)   
    notesContainer.appendChild(pageBox);

    document.getElementById("topicPopup").style="visibility:hidden"
    saveData()
}

function topicPopup(){
    document.getElementById("topicPopup").style="visibility:visible"
}

function closePage(){
 document.getElementById("optionPopup").style="visibility:visible"
}

function rename(){
    document.getElementById("renamePopup").style="visibility:visible"
    document.getElementById("optionPopup").style="visibility:hidden"
}

function change(){
    let x = document.getElementsByClassName("pageBox")
    for (let i = 0; i < x.length; i++) {
        if(x[i].style.height === "72vh"){
            let y = x[i].childNodes

            for(let j = 0 ; j < y.length ; j++){
                z = y[j].childNodes

               for(let k = 0 ; k < z.length-1 ; k++ ){
                z[k].innerHTML=document.getElementById("rename").value;
                document.getElementById("rename").value = "";
               }
               
            }
        }
    }
    document.getElementById("renamePopup").style="visibility:hidden"
    saveData()
}

function saveWork(){
    let x = document.getElementsByClassName("pageBox")
    for (let i = 0; i < x.length; i++) {
                    x[i].style.cssText="height:13rem ; width:10rem";
                    x[i].childNodes[0].childNodes[1].style.visibility = "hidden"; //hide the "...";
    }
    document.getElementById("optionPopup").style="visibility:hidden"
    saveData()
}

function Delete(){
    let x = document.getElementsByClassName("pageBox")
    for (let i = 0; i < x.length; i++) {        
        if(x[i].style.height === "72vh"){
            console.log(x[i]);
            
            x[i].remove()
            break;
        }
    }
    for (let i = 0; i < x.length; i++) {        
        x[i].style.cssText="height:13rem ; width:10rem";
    }
    document.getElementById("optionPopup").style="visibility:hidden"

    // let v = localStorage.getItem("count")
    // localStorage.setItem("count",v-1)
    // saveData()
}

document.getElementById("notesContainer").addEventListener("click",function(e){
    if(e.target.tagName === "P"){        
        let x = document.getElementsByClassName("pageBox")
        for (let i = 0; i < x.length; i++) {
                        x[i].style.cssText="height:0px;width:0px ; visibility : collapse";
        }

        e.target.parentElement.style.cssText="height:72vh ; width:70vw";
        e.target.parentElement.childNodes[0].childNodes[1].style.visibility = "visible";
    }
})

function saveData(e){    
    localStorage.setItem("page",document.getElementById("notesContainer").innerHTML)    
}

function showData() {  
    document.getElementById("notesContainer").innerHTML=localStorage.getItem("page")
}
showData()