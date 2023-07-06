var numberOfButtons = document.querySelectorAll("button.drum").length;


function handleClick (){
    alert("I have been clicked");
}

function playSound (){
    var audio1 = new Audio('./sounds/tom-1.mp3');
    audio1.play();
}

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}