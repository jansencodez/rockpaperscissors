let score = JSON.parse(localStorage.getItem("score")) || {
  wins:0, 
  losses:0,
  ties:0,
};

updateScore();

document.querySelector(".auto").addEventListener("click",()=>{autoPlay()});

let isAutoPlaying=false;
let IntervalId;

function autoPlay(){
  if (!isAutoPlaying){
  IntervalId=setInterval(()=>{
    const playerMove= gameMove();
    playGame(playerMove);
  },1000)
  isAutoPlaying=true
  } else{
    clearInterval(IntervalId);
    isAutoPlaying=false
  }
}
function playGame(playerMove){
  const move=gameMove();
  
  let finalOut=document.querySelector (".outs");
 
  let result="";
  let playm="";
  if (playerMove ==='rock') {
    playm="✊";
    if (move==="rock"){
      result="Tie!";
      ;} else if(move==="paper"){
      result="You Lose!"
    } else if(move==="scissors"){
      result="You Win!"
    }
  }else if(playerMove==='paper'){
    playm="✋";
    if (move==="paper"){
      result="Tie!"
    } else if(move==="rock"){
      result="You Win!"
    } else if(move==="scissors"){
      result="You Lose!"
    }
  } else if (playerMove==='scissors') {
    playm="✌️";
    if (move==="scissors"){
      result="Tie!"
    } else if(move==="paper"){
      result="You Win!"
    } else if(move==="rock"){
      result="You Lose!"
    }
  }
  finalOut.innerHTML = result;
  let takes = document.querySelector('.takes');
  switch (move) {
    case 'rock':
     Move= '✊';
      break;
    case 'paper':
      Move='✋';
      break;
    case 'scissors':
      Move='✌️';
      break;
    default:
      Move='😎';
  }
  takes.innerHTML=`You ${playm} ${Move} Computer`;
  
   if(result ==="You Win!"){
    score.wins+=1
   } else if (result==="You Lose!") {
     score.losses+=1
   } else if (result==="Tie!") {
     score.ties+=1
   };
  localStorage.setItem("score", JSON.stringify(score));
  
  updateScore();

} 

function updateScore() {
  document.querySelector('.results').innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
}

function resetScores(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScore() ;
}
function gameMove(){
  rNumber=Math.random();
  move= (rNumber<1/3)?"rock":(rNumber<2/3)?"paper": (rNumber<1)?"scissors":"nn";
  return move
}