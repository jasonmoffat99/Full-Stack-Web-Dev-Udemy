var output = [];
var count = 1;

function fizzBuzz(){
    // output.push(count);
    // count ++;

    if(count % 3 == 0){
        output.push("Fizz");
    }else if(count % 5 == 0){
        output.push("Buzz");
    }else if(count % 5 == 0 && count % 3 == 0){
        output.push("FizzBuzz");
    }else{
        output.push(count);;
    }
    count ++;
    console.log(output);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();