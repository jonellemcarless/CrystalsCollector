$(document).ready(function() {

// Game Logic for Crystal Collector


// Create global variables
    var firstNumber = [];
    var luckyNumber = [];
    var userAnswer;
    var isChosen = false;
    var isCalculated = false;

    
    // var secondNumber = "";
    // var thirdNumber = "";
    // var fourthNumber = "";


  //  function newGame ( {
        firstNumber = [],
        luckyNumber = [],
        userAnswer,
        isChosen = false,
        isCalculated = false,
    
        


        // Random Number is generated for Lucky Number Function
        $("#lucky-number").on("click", function() {

        for (var i = 0; i < 1; i++) {

            var luckyNumber = Math.floor(Math.random() * 9) + 1;   

         console.log(luckyNumber)

        $("#lucky-number").html("<br><hr>" + luckyNumber); 
        };


        // Random number is generated for Red Button
        $("#red").on("click", function () {
            for (var i = 0; i < 1; i++) {
                var firstNumber = Math.floor(Math.random() * 9) + 1;
         
            console.log(firstNumber)

            // document.getElementById("red").innerHTML = firstNumber;

        }
    
        //... and then dump the random number into our random-number div.
            $("#red").html("<h1>" + firstNumber);

        
    // Get id of element clicked by user
    $("#red").click(function(event) {
    userAnswer = event.target.id;

    // Compare id to target id
    if (userAnswer === luckyNumber) {
      //add a point to wins
        alert("You win!");
      reset();
    }
    else if (userAnswer < luckyNumber) {
    //add difference in points to total score
      alert("Try again!");
      //reset ();
    }
    else (userAnswer > luckyNumber)
    alert("You lose!")
    // a point is added to losses
    //reset ();
  });

        // $(".btn").on("click", function() {
        // if (isCalculated) {
        //     return false;
        //   }
        //   else {
        //     firstNumber += $(this).val();
        //     $("#red-button").text(firstNumber);
        //   }





        
        
        
        

    



    
    
    





    // Clear the divs and arrays upon each round.
    // function clear() {
    //     $("#random-number").empty();
    //     $("red-button").empty();
    //     luckyNumber = [];
    //     redButton = [];
    // }

    // Function for resetting numbers and setting new numbers.
    // function reset() {
    //     clear();
    //     redButton();
    //     luckyNumber();
    // }

        //     // Clears previously selected values
        // $("#random-number #red-button").empty();
        // }



 // $("#red").toggle("click");
    // Run game
    //  reset();


        });
    });

});