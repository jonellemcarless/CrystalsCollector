// Crystal Variables
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    }
  };

var currentScore = 0;
var luckyNumber = 0;
var winCount = 0;
var lossCount = 0;


// FUNCTIONS

// function for random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// start/restart game
var startGame = function() {
  currentScore = 0;
  luckyNumber = getRandom (10, 50);

  crystal.blue.value = getRandom(1, 15);
  crystal.yellow.value = getRandom(1, 15);
  crystal.green.value = getRandom(1, 15);
  crystal.red.value = getRandom(1, 15);

  $("#score").text(currentScore);
  $("#lucky").text(luckyNumber);

    // Testing Console
    console.log("-----------------------------------");
    console.log("Lucky Number: " + luckyNumber);
    console.log("Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value + " | Greem: " + crystal.green.value +
      " | Red: " + crystal.red.value);
    console.log("-----------------------------------");

};

// checking wins/losses
var checkWin = function()
 {
   if (currentScore > luckyNumber) {
     alert("Sorry, you lost.")
     console.log("You lost");
     lossCount++;
     $("#losses").text(lossCount);
     startGame();
   }

   else if (currentScore === luckyNumber) {
     alert("You won!");
     winCount++;
     $("#wins").text(winCount);
     startGame();
   }
 };


 // adding values to the crystals
var addValues = function(clickedCrystal) {
  currentScore += clickedCrystal.value;
  $("#score").text(currentScore);
  checkWin();
  console.log("Your score: " + currentScore);
};


// main function
startGame();

$("#blue").click(function()
{addValues(crystal.blue);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#red").click(function() {
  addValues(crystal.red);
});
