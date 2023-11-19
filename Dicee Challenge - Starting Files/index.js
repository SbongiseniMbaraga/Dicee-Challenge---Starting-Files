//this function will get a random number between 1 and 6
function randomNumber1(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomLeft = randomNumber1(1, 6);
var randomRight = randomNumber1(1, 6);

//this will randomly get one of the 6 images in the image folder
var diceImagesSrcLeft = "images/dice" + randomLeft + ".png";
var diceImagesSrcRight = "images/dice" + randomRight + ".png";
//this will get the element by id that i want to manipulate
let leftDice = document.getElementById("img1ID");
let rightDice = document.getElementById("img2ID");
//this will change the src attribute of the elelment i just got
leftDice.setAttribute("src", diceImagesSrcLeft);
rightDice.setAttribute("src", diceImagesSrcRight);


//changing h1 based on the results of random numbers generated
let headingH1 = document.getElementById("headingID");

if (randomLeft === randomRight) {
    headingH1.textContent = "Draw";
} else if (randomLeft > randomRight){
    headingH1.textContent = "🚩 Player 1 Wins!";
}else{
    headingH1.textContent = "Player 2 Wins! 🚩";
}