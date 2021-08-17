const arrayPlay = ["rock","paper","scissors"];

const computerPlay = () =>{
	return arrayPlay[~~(Math.random()*arrayPlay.length)]
}
	
let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection,computerSelection) =>{
	if(playerSelection == "rock" && computerSelection == "scissors"){
		console.log("player get's one point");
		playerScore += 1;
	}else if(playerSelection == "paper" && computerSelection == "rock"){
		console.log("player get's one point");
		playerScore += 1;
	}else if(playerSelection == "scissors" && computerSelection == "paper"){
		console.log("player get's one point");
		playerScore += 1;
	}
	if(computerSelection == "rock" && playerSelection == "scissors"){
		console.log("computer get's one point");
		computerScore += 1;
	}else if(computerSelection == "paper" && playerSelection == "rock"){
		console.log("computer get's one point");
		computerScore += 1;
	}else if(computerSelection == "scissors" && playerSelection == "paper"){
		console.log("computer get's one point");
		computerScore += 1;
	}
}

const input = prompt("rock,paper or scissors")
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();

playRound(playerSelection,computerSelection);

const game = (playRound)=>{
	playRound(playerSelection,computerSelection);
	playRound(playerSelection,computerSelection);
	playRound(playerSelection,computerSelection);
	playRound(playerSelection,computerSelection);
	playRound(playerSelection,computerSelection);
}
