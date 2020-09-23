//CACHE DOM (store elements for later use)

//declare defualt ai/player score
let playerScore = 0;
let aiScore = 0;
const playerScore_span = document.getElementById("player-score");
const aiScore_span = document.getElementById("ai-score");

//declare score divider
const score_div = document.querySelector(".score");

//declare game play divider
const gamePlay_div = document.querySelector(".game-play > p");

//declare rock/paper/scissors
const rock_div = document.getElementById("rk");
const paper_div = document.getElementById("pp");
const scissors_div = document.getElementById("sc");

//define ai choice
function getAiChoice() {
    const choices = ['rk', 'pp', 'sc'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

//convert symbols to words
function convertWords(letters) {
    if (letters === "rk") return "Rock";
    if (letters === "pp") return "Paper";
    if (letters === "sc") return "Scissors";
}

//define win/lose/draw
function win(userChoice, aiChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    aiScore_span.innerHTML = aiScore;
    //ES5
    gamePlay_div.innerHTML = convertWords(userChoice) + " wins against " + convertWords(aiChoice) + ", You Win!"
    //ES6
    //= `{$convertWords(userChoice)} wins against {$convertWords(aiChoice)}, You Win!`
}
function lose(userChoice, aiChoice) {
    aiScore++;
    playerScore_span.innerHTML = playerScore;
    aiScore_span.innerHTML = aiScore;
    //ES5
    gamePlay_div.innerHTML = convertWords(userChoice) + " loses against " + convertWords(aiChoice) + ", AI Wins!"
}
function draw(userChoice, aiChoice) {
    gamePlay_div.innerHTML = convertWords(userChoice) + " is the same as " + convertWords(aiChoice) + ", it's a Draw!"
}

//define playing
function playing(userChoice) {
    const aiChoice = getAiChoice();
    switch (userChoice + aiChoice) {
        case "rksc":
        case "pprk":
        case "scpp":
            win(userChoice, aiChoice);
            break;
        case "rkpp":
        case "ppsc":
        case "scrk":
            lose(userChoice, aiChoice)
            break;
        case "rkrk":
        case "pppp":
        case "scsc":
            draw(userChoice, aiChoice)
            break;
        
    }
}

//define function main()
function main(){
//button functions
    rock_div.addEventListener('click', function() {
        playing("rk");
    })

    paper_div.addEventListener('click', function() {
        playing("pp");
    })

    scissors_div.addEventListener('click', function() {
        playing("sc");
    })
}

//to run program declare main()
main();