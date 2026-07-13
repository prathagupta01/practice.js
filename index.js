let humanScore = 0;
let computerScore = 0; 
 
 
function getcomputerchoice(){
    const choice = Math.floor(Math.random()*150) + 1;
    if(choice <= 50) return "paper";
    else if(choice <= 100 && choice > 50) return "rock";
    else return "scissor";
}



function gethumanchoice(round){
    let choice = prompt(`enter rock paper or scissor to start the round ${round}`);
    return choice;
}


function playRound(humanChoice,computerChoice){
    let human = humanChoice.toLowerCase();

    if(human === computerChoice) return "TIE! chill ll go to the next round";

    else if((human == "paper" && computerChoice == "scissor" )|| (human == "rock" && computerChoice == "paper" )|| (human == "scissor" && computerChoice == "rock")) {
        computerScore++;
        return "you lose! computer won...";
    }
    else{
        humanScore++;
        return "you win! computer lose...";
    } 

}

function playGame(){
    let rond = 0;
    while(rond < 5){
    let humanchoice = gethumanchoice(rond);
    let computerchoice = getcomputerchoice();
    const round = playRound(humanchoice, computerchoice);
    console.log(`You: ${humanchoice}`);
   console.log(`Computer: ${computerchoice}`);
   console.log(round);
    rond++;
}
    if(humanScore == computerScore) return "its a tie..."
    else if (humanScore > computerScore) return "human wins"
    else return " computer wins"
}

const start = document.getElementById("log");

start.addEventListener("click",() => {
 const result = playGame();

  let  h2 = document.createElement("h2")
   h2.textContent = (result);
document.body.appendChild(h2);
})

