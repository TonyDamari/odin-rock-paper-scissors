
// required elements
const results = document.getElementById('results')
const playerChoice = document.getElementById('playerChoice')
const computerChoice = document.getElementById('computerChoice')
const resultsText = document.getElementById('resultsText')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const play = document.getElementById('play')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

function game(){

let scorePlayer = 0
let scoreComputer = 0

// game play function
play.addEventListener('click', () =>{
    resultsText.innerHTML = `<h2>Choose an option</h2>`
    
    playerPlay()
   
    

    
})

//functions

function computerPlay(){
    const computerOptions = ['rock', 'paper', 'scissors']
    const computerOutput = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerOutput
}



function playerPlay(){
   
    const playerOptions = [rock,paper,scissors]

     playerOptions.forEach(option => {
        option.addEventListener('click', () =>{
           
            const playerSelection = option.value
            const computerSelection = computerPlay()
            const gameOver = document.getElementById('gameOver')

             playRound(playerSelection, computerSelection)
             computerScore.innerText = scoreComputer
             playerScore.innerText = scorePlayer
           
            if(scoreComputer > 4){
                
                gameOver.innerHTML = 
                `<h2>Game Over!!!!!</h2>
                <p>Computer Wins!!!</p>`
                setTimeout(reset, 5000)
            }else if(scorePlayer > 4){
                gameOver.innerHTML = 
                `<h2>Game Over!!!!!</h2>
                <p>Player Wins!!!</p>`
                setTimeout(reset, 5000)
            }
            
           
        })
    })

    
}

function reset(){
    location.reload()
}



function playRound(playerSelection, computerSelection){
    
    
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        playerChoice.src = 'assets/rock.png'
        computerChoice.src = 'assets/paper.png'
        scoreComputer++
        resultsText.innerHTML = `<h2>You Lose! Paper beats Rock</h2>`
        resultsText.style.background = 'red'
        resultsText.style.color = 'white'
        return 
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerChoice.src = 'assets/rock.png'
        computerChoice.src = 'assets/scissors.png'
        scorePlayer++
        resultsText.innerHTML = `<h2>You Win! Rock beats Scissors</h2>`
        resultsText.style.background = 'green'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        playerChoice.src = 'assets/rock.png'
        computerChoice.src = 'assets/rock.png'
        resultsText.innerHTML = `<h2>It's a tie, no one wins</h2>`
        resultsText.style.background = 'indigo'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        playerChoice.src = 'assets/paper.png'
        computerChoice.src = 'assets/scissors.png'
        scoreComputer++
        resultsText.innerHTML = `<h2>You Lose! Scissors beats Paper</h2>`
        resultsText.style.background = 'red'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerChoice.src = 'assets/paper.png'
        computerChoice.src = 'assets/rock.png'
        scorePlayer++
        resultsText.innerHTML = `<h2>You Win! Paper beats Rock</h2>`
        resultsText.style.background = 'green'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        playerChoice.src = 'assets/paper.png'
        computerChoice.src = 'assets/paper.png'
        resultsText.innerHTML = `<h2>It's a tie, no one wins</h2>`
        resultsText.style.background = 'indigo'
        resultsText.style.color = 'white'
        return
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        playerChoice.src = 'assets/scissors.png'
        computerChoice.src = 'assets/rock.png'
        scoreComputer++
        resultsText.innerHTML = `<h2>You Lose! Rock beats Scissors</h2>`
        resultsText.style.background = 'red'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerChoice.src = 'assets/scissors.png'
        computerChoice.src = 'assets/paper.png'
        scorePlayer++
        resultsText.innerHTML = `<h2>You Win! Rock beats Scissors</h2>`
        resultsText.style.background = 'green'
        resultsText.style.color = 'white'
        return 
    }else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        playerChoice.src = 'assets/scissors.png'
        computerChoice.src = 'assets/scissors.png'
        resultsText.innerHTML = `<h2>It's a tie, no one wins</h2>`
        resultsText.style.background = 'indigo'
        resultsText.style.color = 'white'
        return 
    }else{
        resultsText.innerHTML = `<h2>Player did not enter selection!!!!</h2>`
        resultsText.style.background = 'red'
        resultsText.style.color = 'white'
        return
    }

   
}


}

game()