//Setup Canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//html Var
let paperBtn = document.getElementById("paper-Btn");
let rockBtn  = document.getElementById("rock-Btn");
let scissorsBtn = document.getElementById("scissors-Btn");
let lizardBtn = document.getElementById("lizard-Btn");
let spockBtn = document.getElementById("spock-Btn");
let winnerOut = document.getElementById("winner");

//img
let baseImg = document.getElementById("baseImg");
let threeImg = document.getElementById("threeImg");
let twoImg = document.getElementById("twoImg");
let oneImg = document.getElementById("oneImg");
let paperImg = document.getElementById("paperImg");
let rockImg = document.getElementById("rockImg");
let scissorsImg = document.getElementById("scissorsImg");
let spockImg = document.getElementById("spockImg");
let lizardImg = document.getElementById("lizardImg");
ctx.drawImage(baseImg, 10, 50, 380, 220);

//Event Listener
paperBtn.addEventListener("click", countdownLarge);
rockBtn.addEventListener("click", countdownLarge);
scissorsBtn.addEventListener("click", countdownLarge);
lizardBtn.addEventListener("click", countdownLarge);
spockBtn.addEventListener("click", countdownLarge);
paperBtn.addEventListener("click", paperinput);
rockBtn.addEventListener("click", rockinput);
scissorsBtn.addEventListener("click", scissorsinput);
lizardBtn.addEventListener("click", lizardinput);
spockBtn.addEventListener("click", spockinput);

//Input
let input;

function paperinput(){
    input = "paper";
}
function rockinput(){
    input = "rock";
}
function scissorsinput(){
    input = "scissors";
}
function lizardinput(){
    input = "lizard";
}
function spockinput(){
    input = "spock";
}



//Process


function countdownLarge(){
    //Reset Var
    winnerOut.innerHTML = ""
    let num = Math.random();
    let frameCount = 0;
requestAnimationFrame(countdown);
function countdown() {
    
    
    //Update V
    frameCount ++

    //Background
    if ( frameCount < 185){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, cnv.width,cnv.height);}

    if (frameCount < 61) {
        ctx.drawImage(threeImg, 10, 50, 380, 220);
    } else if (frameCount <121){
        ctx.drawImage(twoImg, 10, 50, 380, 220);
    } else if (frameCount < 181){
        ctx.drawImage(oneImg, 10, 50, 380, 220);
    } else if (frameCount < 200){

        //Opponent
        if (num < 0.2) {
            ctx.drawImage(paperImg, 10, 50, 350, 350);
        } else if (num < 0.4) {
            ctx.drawImage(rockImg, 10, 50, 350, 350)
        } else if (num < 0.6){
            ctx.drawImage(scissorsImg, 10, 50, 350, 350)
        } else if ( num <0.8){
            ctx.drawImage(lizardImg, 10, 50, 350, 350)
        } else {
            ctx.drawImage(spockImg, 10, 50, 350, 350)
        }


        //Winning
        if(input === "paper") {
            if (num < 0.2) {
                winnerOut.innerHTML = "Tie. Please play again"
            } else if (num < 0.4) {
                winnerOut.innerHTML = "You Win. Paper covers Rock. "
            } else if (num < 0.6) {
                winnerOut.innerHTML = "You Lose. Paper is cut by Scissors. "
            } else if (num < 0.8){
                winnerOut.innerHTML = "You Lose. Paper is eaten by Lizard"
            } else {
                winnerOut.innerHTML = "You Win. Paper disproves Spock"
            }

        } else if(input === "rock") {
            if (num < 0.2) {
                winnerOut.innerHTML = "You Lose. Rock is covered by Paper."
            } else if (num < 0.4) {
                winnerOut.innerHTML = "Tie. Please play again "
            } else if (num < 0.6) {
                winnerOut.innerHTML = "You Win. Rock beats Scissors. "
            } else if (num < 0.8){
                winnerOut.innerHTML = "You Win. Rock crushes Lizard"
            } else {
                winnerOut.innerHTML = "You Lose. Rock is vaporised by Spock"
            }

        } else if(input === "scissors") {
        if (num < 0.2) {
            winnerOut.innerHTML = "You Win. Scissors cuts Paper"
        } else if (num < 0.4) {
            winnerOut.innerHTML = "You Lose. Scissors are beaten by Rock. "
        } else if (num < 0.6) {
            winnerOut.innerHTML = "Tie. Please play again "
        } else if (num < 0.8){
            winnerOut.innerHTML = "You Win. Scissors decapitates Lizard"
        } else {
            winnerOut.innerHTML = "You Lose. Scissors are bent by Spock"
        }
        } else if(input === "lizard") {
            if (num < 0.2) {
                winnerOut.innerHTML = "You Win. lizard eats Paper"
            } else if (num < 0.4) {
                winnerOut.innerHTML = "You Lose. Lizard is beaten by Rock. "
            } else if (num < 0.6) {
                winnerOut.innerHTML = " You Lose. Lizard is decapitated by Scissors  "
            } else if (num < 0.8){
                winnerOut.innerHTML = "Tie. Please play again "
            } else {
                winnerOut.innerHTML = "You Win. Lizard poisons by Spock"
            }
        } else if(input === "spock") {
             if (num < 0.2) {
                    winnerOut.innerHTML = "You Lose. Spock is disproven by Paper"
                } else if (num < 0.4) {
                    winnerOut.innerHTML = "You Win. Spock vaporises Rock. "
                } else if (num < 0.6) {
                    winnerOut.innerHTML = " You Win. Spock bends Scissors  "
                } else if (num < 0.8){
                    winnerOut.innerHTML = " You Lose. Spock is poisoned by Lizard"
                } else {
                    winnerOut.innerHTML = "Tie. Please play again"
                }}
    

}
requestAnimationFrame(countdown);

}}