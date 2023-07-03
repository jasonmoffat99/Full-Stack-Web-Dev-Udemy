// while loop format

function beerBottles (){
    var beerCount = 99;

    while (beerCount > 0){
        if(beerCount <= 99){
            console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer take one down and pass it around " + (beerCount - 1) + " bottles of beer on the wall"); 
        }else if(beerCount === 1){
            console.log(beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer take one down and pass it around no more bottles of beer on the wall");
        }else{
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottls of beer on the wall");
        }
        beerCount --;
    }
}

// beerBottles();

function beerBottles2(){
    for(var i = 99; i > 0; i--){
        if(i <= 99){
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer take one down and pass it around " + (i - 1) + " bottles of beer on the wall"); 
        }else if(i === 1){
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer take one down and pass it around no more bottles of beer on the wall");
        }else{
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottls of beer on the wall");
        }
    }

}

beerBottles2();