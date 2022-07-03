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
    let result;

    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("What's your move?")
        const computerSelection = computerPlay();
        let round = playRound(playerSelection,  computerSelection);

        console.log(round);

        if (round == 1) {
            player++;
        } else if (round == 2) {
            computer++;
        } else {
            player++;
            computer++;
        }
    }

    if (player > computer) {
        result = 'YOU WIN!';
    } else if (computer > player) {
        result = 'YOU LOSE!';
    } else {
        result = 'DRAW';
    }

    return result;
}

console.log(game());

