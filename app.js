const game = () => {
let pScore = 0;
let cScore = 0;

//Start the Game
const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

        //function for fadeout for after clicking play button

    playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeOut");
    match.classList.add("fadeIn");
    });
};
  //Player Match
  const playerMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];
    
    options.forEach(option=>{
        option.addEventListener("click", function(){
            //computer choices
            const computerNumber = Math.floor(Math.random() * 3 );
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
        });
    });
};

const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
}

const   compareHands = (playerChoice, computerChoice)=> {
    //udated text
    const winner = document.querySelector('.winner');
    //checking a tie
    if (playerChoice === computerChoice){
        winner.textContent == 'it is a tie';
        return;
    }
    //check for rock
    if (playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        } else{
            winner.textContent = 'computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
    // check for scissors
    if (playerChoice === 'scissors'){
        if (computerChoice === 'paper'){
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        } else{
            winner.textContent = 'computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
    // check for paper
    if (playerChoice === 'paper'){
        if (computerChoice === 'rock'){
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        } else{
            winner.textContent = 'computer wins';
            cScore++;
            updateScore();
            return;
        }
    } 
};

//here i called all the main functions
startGame();
playerMatch();
};

//here i called start game function
game();