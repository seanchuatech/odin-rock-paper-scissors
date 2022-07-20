function computerPlay () {
    var values = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    var value = values[Math.floor(Math.random() * values.length)];

    return value;
}

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;

    // 0 = tie
    // 1 = win
    // 2 = lose
    if (player == computer) {
        result = 0;
    } else if (player == 'rock' && computer == 'scissors') {
        result = 1;
    } else if (player == 'rock' && computer == 'paper') {
        result = 2;
    } else if (player == 'scissors' && computer == 'paper') {
        result = 1;
    } else if (player == 'scissors' && computer == 'rock') {
        result = 2;
    } else if (player == 'paper' && computer == 'rock') {
        result = 1;
    } else if (player == 'paper' && computer == 'scissors') {
        result = 2;
    } else {
        result = 'Something is not right!';
    }

    return result;
}

function game () {

    let player = 0;
    let computer = 0;
    let result = '';

    // for (let i = 0; i < 5; i++) {
        // const playerSelection = window.prompt("What's your move?")
    
        // let round = playRound(playerSelection,  computerSelection);

        // console.log(round);

        // if (round == 1) {
        //     player++;
        // } else if (round == 2) {
        //     computer++;
        // } else {
        //     player++;
        //     computer++;
        // }
    // }CODE
        let winner = document.getElementById('winner');
        let btns = document.querySelectorAll('button');

        let round = '';
        btns.forEach((button) =>
        button.addEventListener(('click'), () =>{
            if(button.id) {
                const computerSelection = computerPlay();
                round = playRound(button.id, computerSelection)
                
                if (round == 1) {
                    player++;
                } else if (round == 2) {
                    computer++;
                } else {
                    player++;
                    computer++;
                }
                console.log(player)
                console.log(computer)
                
                if(player === 5 || computer === 5) {
                    if (player > computer) {
                        result = 'YOU WIN!';
                        winner.textContent = result;
                    } else if (computer > player) {
                        result = 'YOU LOSE!';
                        winner.textContent = result;
                    } else {
                        result = 'DRAW';
                        winner.textContent = result;
                    }

                }
                
            }
        }))
        return '';
        
        
        
        // rockBtn.addEventListener("click", function(){
        //     const computerSelection = computerPlay();
        //     let round = playRound('rock', computerSelection);

        //     console.log(round);

        //     if (round == 1) {
        //         player++;
        //     } else if (round == 2) {
        //         computer++;
        //     } else {
        //         player++;
        //         computer++;
        //     }
        // })

        // paperBtn.addEventListener("click", function(){
        //     const computerSelection = computerPlay();
        //     playRound('paper', computerSelection);
        // });

        // scissorBtn.addEventListener("click", function(){
        //     const computerSelection = computerPlay();
        //     playRound('scissor', computerSelection);
        // });


        // if (player > computer) {
        //     result = 'YOU WIN!';
        // } else if (computer > player) {
        //     result = 'YOU LOSE!';
        // } else {
        //     result = 'DRAW';
        // }
    
}

console.log(game());
