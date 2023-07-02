// bmi = weight(kg)/height^2(m)

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / heightSquared(height));

    return bmi

}

function heightSquared(height){

    var height2 = height * height;

    return height2
}

//console.log("This is your BMI " + bmiCalculator(73, 1.79));

// alternative solution

function bmiCalculator2(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));

    return bmi
}

//console.log("This is your BMI " + bmiCalculator2(73, 1.79));

function bmiCalculator3(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));

    if (bmi < 18.5) {

        console.log("Your BMI is" + bmi + "which means your low but just fine this claculator is very silly");
    }if (bmi > 18.5 && bmi < 24.9){
        console.log("Your BMI is " + bmi + " so you are a normal weight");
    }else if(bmi > 24.9){
        console.log("Your BMI is " + bmi + "so you are a normal weight also this calculator is very silly");
    }

    return bmi
}

bmiCalculator3(73, 1.79);