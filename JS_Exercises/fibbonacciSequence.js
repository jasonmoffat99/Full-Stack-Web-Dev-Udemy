function fibonacciSequence(n){
    output = [];
    for (var i=1; i <= n; i++) {
        if(i == 1){
            output.push(0);
        }else if(i == 2){
            output.push(1);
        }else{
            output.push(i + (i - 1));
        }
    }

    return output
}

// console.log(fibonacciSequence(15));

function fibonacciSequence2(n){
    output = [0, 1];
    for (var i=2; i < n; i++) {
        output.push(output[i - 1] + output[i - 2]);
    }
    return output
}

console.log(fibonacciSequence2(15));