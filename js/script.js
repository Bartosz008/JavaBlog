{function getMoveName(randomNumber) {

    if (randomNumber == 1) {
        return 'kamień';
    }
    else if (randomNumber == 2) {
        return 'papier';
    }
    else (randomNumber == 3); {
        return 'nożyce';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {


    if (playerMove == 'Nieznany ruch') {
        printMessage('Nieznany ruch');
    }

    else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!')
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywasz!')
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!')
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!')
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!')
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!')
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!')
    }
}
displayResult (computerMove,playerMove)
}
