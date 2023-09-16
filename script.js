function getComputerChoice(){
    choice=["Rock", "Paper", "Scissors"]
    randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){

    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    console.log(playerSelection,computerSelection)

    if(playerSelection=="rock" && computerSelection=="paper"){
        z+=1;
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="paper" && computerSelection=="rock"){
        z+=2;
        return "You Won! Paper beats Rock";
    }

    if(playerSelection=="rock" && computerSelection=="scissors"){
        z+=2;
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
    if(playerSelection=="scissors" && computerSelection=="Paper"){
        z+=2;
        return "You Won! Scissors beats Paper";
    }

    if(playerSelection==computerSelection){
        return "It's Tie!";
    }

}

function game(){

    const playerSelection = prompt("Enter your choice:")

    const computerSelection = getComputerChoice();

    x="W";
    y="L";
    result = playRound(playerSelection, computerSelection)
    console.log(result);
    console.log(z);

    if(z==2){
        score1+=1;
    }else if(z==1){
        score2+=1
    }

}

let score1=0;
let score2=0;
let z=0;

while(score1<5&&score2<5){
    game();
    z=0;
    console.log("Player Score is",score1);
    console.log("Computer Score is",score2);
}

