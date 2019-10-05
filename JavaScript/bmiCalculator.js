/* Implementation of BMI calculator. */
function bmiCalculator (weight, height) {
    bmi = (weight / (height * height));
    return Math.round(bmi);
}

var bmi = bmiCalculator(60, 2);

if (bmi > 24.9) {
    console.log("Your BMI is " + bmi + ", so you are overweight.")
}

if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight.")
}

if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight.")
}
