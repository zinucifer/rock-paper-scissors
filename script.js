//This function plays the game
function playRound(playerSelection, computerSelection){

    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    console.log(playerSelection,computerSelection)

    if(playerSelection=="rock" && computerSelection=="paper"){
        z+=1;
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="paper" && computerSelection=="rock"){
        z1+=1
        return "You Won! Paper beats Rock";
    }

    if(playerSelection=="rock" && computerSelection=="scissors"){
        z1+=1;
        return "You Won! Rock beats Scissors";
    }
    if(playerSelection=="scissors" && computerSelection=="rock"){
        z+=1;
        return "You Lose! Rock beats Scissors";
    }

    if(playerSelection=="paper" && computerSelection=="scissors"){
        z+=1;
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection=="scissors" && computerSelection=="paper"){
        z1+=1;
        return "You Won! Scissors beats Paper";
    }

    if(playerSelection==computerSelection){
        return "It's Tie!";
    }

}

// function game(){

//     const playerSelection = prompt("Enter your choice:")
// if(z==2){
//     score1+=1;
// }else if(z==1){
//     score2+=1
// }
// x="W";
// y="L";
// result = playRound(playerSelection, computerSelection)
// console.log(result);
// console.log(z);
// }

// let score1=0;
// let score2=0;
let z=0;
let z1=0;

// while(score1<5&&score2<5){
//     game();
//     z=0;
//     console.log("Player Score is",score1);
//     console.log("Computer Score is",score2);
// }

//This function removes the computer sign after 2 Seconds
function removeSign(){
    const computerSign = document.querySelector('.computer-sign');
    computerSign.src="/images/waiting.gif";
    const reset = document.querySelector('.reset');
    reset.textContent=result;
}

//This function updates the game score
function updateScore(z,z1){
    const user = document.querySelector('.user-score');
    const computer = document.querySelector('.computer-score');
    user.textContent=z1;
    computer.textContent=z;
}

//This function guess's the computer choice
function getComputerChoice(){
     const computerSign = document.querySelector('.computer-sign');
     choice=["Rock", "Paper", "Scissors"]
     randomChoice = Math.floor(Math.random()*choice.length);
     
     if(choice[randomChoice]=="Rock"){
        computerSign.src="images/rock.gif";
     }else if(choice[randomChoice]=="Paper"){
        computerSign.src="images/paper.gif";
     }else{
        computerSign.src="images/scissors.gif";
     }
     
     
     return choice[randomChoice];
 }

const container = document.querySelector('#container');
const game = document.querySelector('.game');
container.removeChild(game); // Removes the Game Element

const start = document.querySelector('.start');

start.addEventListener('click', () => {
    container.removeChild(start);
    container.appendChild(game);
    let playerSelection="";
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button)=>{
        button.addEventListener('click', () => {
            playerSelection=(button.classList).value;
            let computerSelection=getComputerChoice();
            console.log(playerSelection);
            result = playRound(playerSelection, computerSelection);
            console.log(result);
            updateScore(z,z1);
            const timeout = setTimeout(removeSign,1600);
        });
    });

    

});
