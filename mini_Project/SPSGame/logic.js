let userImg = document.getElementById("userImg")
let pcImg = document.getElementById("pcImg")
let u;
let r;
let score ={
  Won : 0,
  Draw : 0,
  Defeat : 0,
};

function paper(){
  userImg.setAttribute("src","./img/leftH-removebg-preview.png")
  u = 0
  pcBrain()
  finalResult = result(r)
  showResult(finalResult)
  console.log(score);
  
}

function stone(){
  userImg.setAttribute("src","./img/leftS-removebg-preview.png")
  u = 1
  pcBrain()
  finalResult = result(r)
  showResult(finalResult);
}

function scissor(){
  userImg.setAttribute("src","./img/leftT-removebg-preview.png")
  u = 2
  pcBrain()
  finalResult = result(r)
  showResult(finalResult)
}

function pcBrain(){
  let x=["./img/rightH-removebg-preview.png","./img/rightS-removebg-preview.png","./img/rightT-removebg-preview.png",]
  r = Math.round(Math.random() * 2)
  pcImg.setAttribute("src",x[r])
}

function result(r){
   r = Number(r)
  if( u === r ){
    score.Draw++ 
    return "Draw"
  }
  else if( u === 0 && r === 2){
    score.Won++
    return "You Won"
  }
  else if( u=== 1 && r === 0){
    score.Won++
    return "You Won"
  }
  else if ( u === 2 && r === 1){
    score.Won++
   return "You Won"
  }
  else if( u === 0 && r === 1){
    score.Defeat++
    return "Robo Won"
  }
  else if( u === 1 && r === 2){
    score.Defeat++
    return "Robo Won"
  }
  else if( u === 2 && r === 0){
    score.Defeat++
    return "Robo Won"
  }
}

function showResult(finalResult){
  document.getElementById("showResult").innerHTML = finalResult
}

function closePrompt(){
  document.getElementsByClassName("prompt")[0].style.cssText ="visibility : hidden"
}