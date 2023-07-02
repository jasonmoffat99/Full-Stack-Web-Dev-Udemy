// If a year is evenly divisible by 4, but it is not evenly divisible 100, then it is a leap year.
// If a year is divisible by both 100 and 400, then it is a leap year


function leapYear(year){
    // var year = prompt("Please enter a year to determine whether it is a leap year or not?: ");
    if(year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0 ){
        console.log("This is a leap year!")
    }else{
        console.log("This is not a leap year")
    }
}

leapYear(2000);