function loveCalculator() {
    var name1 = prompt("Please enter the name of the first person: ");
    var name2 = prompt("Please enter the name of the second person: ");

    var l = Math.random();
    l = l * 100;
    l = Math.floor(l)+ 1;

    console.log("You're compatibility percentage between " + name1 + " and " + name2 + " is " + l +"%");
}

loveCalculator();