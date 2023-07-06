function lunchBuyer(names){
    var numberOfPeople = names.length;
    var randomPicker = Math.floor(Math.random() * numberOfPeople);

    var randomPerson = names[randomPicker];
    
    console.log(randomPerson + " is paying for lunch this time. Unlucky friend. :( ");
    
}

for(var i = 0; i < 3; i++) {
    lunchBuyer(["Jason","Joe","Bob","Tim","Joey","Steve","Greg"]);
}
