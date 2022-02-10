

let computerScore = 0
let playerScore = 0

// console.log("Player Selection: " + playerSelection)
// console.log("Computer Selection: " + computerSelection)
// console.log(playRound(playerSelection,computerSelection))

function game(){

    function computerPlay(){
        const computerOptions = ['rock', 'paper', 'scissors']
        const computerOutput = computerOptions[Math.floor(Math.random()*computerOptions.length)];
        return computerOutput
    }
    
    function playerPlay(){
        let playerInput = prompt('Enter your selection here')
        return playerInput.toLowerCase()
    }
    
    
    
    
    function playRound(playerSelection, computerSelection){
    
    
        if(playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore++
            return "You Lose! Paper beats Rock"
        } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            return "You Win! Rock beats Scissors"
        }else if(playerSelection === 'rock' && computerSelection === 'rock'){
            return "It's a tie, no one wins"
        }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            computerScore++
            return "You Lose! Scissors beats Paper"
        }else if(playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
            return "You Win! Paper beats Rock"
        }else if(playerSelection === 'paper' && computerSelection === 'paper'){
            return "It's a tie, no one wins" 
        }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            return "ou Lose! Rock beats Scissors"
        }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore++
            return "You Win! Rock beats Scissors"
        }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
            console.log("It's a tie, no one wins")
        }else{
            return "Player did not enter selection"
        }
    }
    
    
    
    const playerSelection = playerPlay()
    const computerSelection = computerPlay()




    console.log("Player Selection: " + playerSelection)
    console.log("Computer Selection: " + computerSelection)
    console.log(playRound(playerSelection,computerSelection))
    // console.log(playerScore)

   
    
}

let i = 1

while(i<6){
    
   console.log("ROUND!!: " + i)
   game()
    i++
    console.log('Player Score: ' + playerScore)
    console.log('Computer score: ' + computerScore)
    console.log(' ')

    if(i === 6){
        if(playerScore > computerScore){
            console.log("You Win!!!")
        }else if(playerScore === computerScore){
            console.log('It is a tie, no one has won')
        } else{
            console.log("Computer Wins!!!")
        }
       
    }
}