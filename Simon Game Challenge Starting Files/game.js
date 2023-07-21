
// create a empty array to tarck the game apttern
var gamePattern = [];

// create an array that holds all the button colours
var buttonColours = ["red", "blue", "green", "yellow"];

// empty array for user clicked pattern
var userClickedPattern = [];

// handles button click
$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
})

// create the function that will record the sequence
function nextSequence(){

    // we use this to create a random number of 0 - 3 
    var randomNumber = Math.floor(Math.random() * 4);

    // we assign the random number so that we can randomly select from the array using the random number as an index
    var randomChosenColour = buttonColours[randomNumber];

    // Here we push the random chosen colour into the empty array
    gamePattern.push(randomChosenColour);

    // here we select the id at random by concatenating the '#' with the variable so it can produce '#red' for exmaple.
    // we then use the fadeout and fade in to create a flash effect
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    
}

function playSound(name){
    switch(name){
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default: 
            console.log("sound was played")
            break;
    }
}



