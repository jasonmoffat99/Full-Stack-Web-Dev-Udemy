function lifeInWeeks(age){
    var ageInDays = age * 365;
    var ageInWeeks = ageInDays / 52; 
    var ageInMonths = age * 12;

    console.log("You are: "+ ageInDays + "Old" + ageInWeeks + ageInMonths);
}

lifeInWeeks(24);