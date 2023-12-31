var numberOfButtons = document.querySelectorAll("button.drum").length;


function handleClick (){
    alert("I have been clicked");
}

function playSound (){
    var audio1 = new Audio('./sounds/tom-1.mp3');
    audio1.play();
}

// Detecting button press with mouseclick to play sound

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonSelectior = this.innerHTML;

        makeSound(buttonSelectior);
        buttonAnimation(buttonSelectior);

        
    });
}

// for (var i = 0; i < numberOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         this.style.color = "white";
//     });
// }


// Detecting keyboard press with keyboard to play sound

document.addEventListener("keydown", function(e){
    makeSound(e.key); // tracks the keyboard key through the event that tracks the entire document.
    buttonAnimation(e.key);

});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kickbass = new Audio('./sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        default: 
            console.log(buttonSelectior + "button was pressed")
            break;
    }

}

function buttonAnimation(currentKey){

    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");


    setTimeout(function() {
        activeKey.classList.remove("pressed");
    },150);

}