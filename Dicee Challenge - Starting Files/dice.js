// creating the random number generator for first dice on the left
// var initialImage1 = document.querySelectorAll[0].setAttribute("src", "./images/dice6.png");
// var initialImage2 = document.querySelectorAll[1].setAttribute("src", "./images/dice6.png");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSource = "./images/" + randomDiceImage;

console.log(randomImgSource);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);

// creating second random number generator for second dice on the right

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2 );

function titleChange(){
    
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = ("Player 1 wins!");
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerText = ("Player 2 wins!");
    }else{
        document.querySelector("h1").innerText = ("Draw!");
    }

}

titleChange();