    const game = ()=> {
        let pScore=0;
        let cScore=0;

    //start the game
        const startGame =()=>{
            const playBtn = document.querySelector(".intro button");
            const introScreen = document.querySelector(".intro");
            const match = document.querySelector(".match");

            //function for fadeout for after clicking play button
        
            playBtn.addEventListener('click', ()=> {
                introScreen.classList.add("fadeOut");
                match.classList.add("fadeIn");
            });
        };
        //player Match
        const playerMatch= () => {
            const options = document.querySelectorAll(".options button");
            const playerHand = document.querySelectorAll(".player-hand");
            const computerHand = document.querySelectorAll(".computer-hand");
            //options for computer

            const computerOptions = ["rock", "paper", "scissors"];
            options.forEach(option=>{
                option.addEventListener("click", function(){
                    //computer choices
                    const computerNumber = Math.floor(Math.random() * 3 );
                    const computerChoice = computerOptions[computerNumber];
                    // here we will call compare hands
                    compareHands(this.textContent, computerChoice);
                    //update images
                    playerHand.src =`./assets/${this.textContent}.png`;
                    computerHand.src =`./assets/${computerChoice}.png`;
                });
            });
        };
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
                    return;
                } else{
                    winner.textContent = 'computer wins';
                    return;
                }
            }
            // check for scissors
            if (playerChoice === 'scissors'){
                if (computerChoice === 'paper'){
                    winner.textContent = 'player wins';
                    return;
                } else{
                    winner.textContent = 'computer wins';
                    return;
                }
            }
            // check for paper
            if (playerChoice === 'paper'){
                if (computerChoice === 'rock'){
                    winner.textContent = 'player wins';
                    return;
                } else{
                    winner.textContent = 'computer wins';
                    return;
                }
            }
            
        }







        //here i called all the main functions
        startGame();
        playerMatch();
    };

    //here i called start game function
    game();