let userImg = document.getElementById("userImg")
let pcImg = document.getElementById("pcImg")
let u;

function paper(){
  userImg.setAttribute("src","./img/leftH-removebg-preview.png")
  u = 0
  pcBrain()
  r = localStorage.getItem("r")
  finalResult = result(r)
  showResult(finalResult)
}

function stone(){
  userImg.setAttribute("src","./img/leftS-removebg-preview.png")
  u = 1
  pcBrain()
  r = localStorage.getItem("r")
  finalResult = result(r)
  showResult(finalResult);
}

function scissor(){
  userImg.setAttribute("src","./img/leftT-removebg-preview.png")
  u = 2
  pcBrain()
  r = localStorage.getItem("r")
  finalResult = result(r)
  showResult(finalResult)
}

function pcBrain(){
  let x=["./img/rightH-removebg-preview.png","./img/rightS-removebg-preview.png","./img/rightT-removebg-preview.png",]
  let r = Math.round(Math.random() * 2)
  pcImg.setAttribute("src",x[r])
  localStorage.setItem("r",r)
}

function result(r){
   r = Number(r)
  if( u === r ){
     return "Draw"
  }
  else if( u === 0 && r === 2){
    return "You Won"
  }
  else if( u=== 1 && r === 0){
    return "You Won"
  }
  else if ( u === 2 && r === 1){
   return "You Won"
  }
  else if( u === 0 && r === 1){
    return "Robo Won"
  }
  else if( u === 1 && r === 2){
    return "Robo Won"
  }
  else if( u === 2 && r === 0){
    return "Robo Won"
  }
}

function showResult(finalResult){
  document.getElementById("showResult").innerHTML = finalResult
}

function closePrompt(){
  document.getElementsByClassName("prompt")[0].style.cssText ="visibility : hidden"
}