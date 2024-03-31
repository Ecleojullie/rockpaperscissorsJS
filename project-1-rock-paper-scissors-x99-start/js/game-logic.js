// All code should be written in this file.


// NATHAN HERE
// Jullie HERE
// Nathan here
var playerOneMoveOneType;
var playerOneMoveTwoType;
var playerOneMoveThreeType;


var playerOneMoveOneValue;
var playerOneMoveTwoValue;
var playerOneMoveThreeValue;


var playerTwoMoveOneType;
var playerTwoMoveTwoType;
var playerTwoMoveThreeType;


var playerTwoMoveOneValue;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player == "Player One") {
        playerOneMoveOneType = moveOneType 
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoType = moveTwoType
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeType = moveThreeType
        playerOneMoveThreeValue = moveThreeValue
    } else if (player == "Player Two") {
        playerTwoMoveOneType = moveOneType
        playerTwoMoveOneValue = moveOneValue
        playerOneMoveTwoType = moveTwoType
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveThreeValue = moveThreeValue
    }
}

const getRoundWinner = (round) => {
    if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "rock") {
        return "Tie" 
    } else if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "paper") {
        return "Player Two" 
    } else if (playerOneMoveOneType === "rock" && playerTwoMoveOneType === "scissors") {
        return "Player One"
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "rock") {
        return "Player One" 
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "paper") {
        return "Tie" 
    } else if (playerOneMoveOneType === "paper" && playerTwoMoveOneType === "scissors") {
        return "Player Two"
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "rock") {
        return "Player Two" 
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "paper") {
        return "Player One" 
    } else if (playerOneMoveOneType === "scissors" && playerTwoMoveOneType === "scissors") {
        return "Tie"
    } 

}

// jullie cute HERE
// another 

//NATHAN CUTIE HERE

//NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//NAAAAAAAAAAAAAAAA33333333333333