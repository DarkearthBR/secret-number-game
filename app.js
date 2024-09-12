let ChoosenNumberList = [];
let numberLimit = 10;
let secretNumber = generateRandomNumber();
let trys = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'US English Female', {rate:1.2} );
}

function showText() {
    exibirTextoNaTela('h1', 'Secret Number Game')
    exibirTextoNaTela('p', 'Choose a number between 1 and 10!')
}

showText();

function checkTheAttempt() {
    let guess = document.querySelector('input').value;

    if (guess == secretNumber)   {
        exibirTextoNaTela('h1', 'Correct!');
        let worldTrys = trys > 1 ? 'trys' : 'try';
        let messageTrys = `You discovered the Secret Number with ${trys} ${worldTrys}!`;
        exibirTextoNaTela('p', messageTrys);
        document.getElementById('restart').removeAttribute('disabled');
    }else{
        if(guess > secretNumber){
            exibirTextoNaTela('p', 'The number is lower than the attempt');
        }else{
            exibirTextoNaTela('p', 'The number is bigger than the attempt');
        }
        trys++; 
        cleanCamp();
    }
}

function generateRandomNumber() {
    let ChosenNumber = parseInt(Math.random() * numberLimit + 1);
    let numberofELementsList = ChoosenNumberList.length;

if (numberofELementsList == numberLimit){
    ChoosenNumberList = [];
}

    if (ChoosenNumberList.includes(ChosenNumber)){
        return generateRandomNumber();
    } else{
        ChoosenNumberList.push(ChosenNumber);
        return ChosenNumber;
    }
}

function cleanCamp() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    cleanCamp();
    trys = 1;
    showText();
    document.getElementById('restart').setAttribute('disabled', true);
}