function whosePaying(names){
    var numOfPeople = names.length;
    var randomSelector = Math.floor(Math.random() * numOfPeople);
    var randomPerson = names[randomSelector];

    console.log( randomPerson + " will be paying for lunch today!!!");
}

whosePaying(["John", "Jason", "Steve", "Bob", "Tom", "Stacy"]);
