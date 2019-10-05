/* Implementation of FizzBuzz. */
function fizzBuzz(count) {
    var output = [];
    var itteration = 1;
    var arrayValue = '';

    while (itteration <= count) {
        if ((itteration % 3 === 0) && (itteration % 5 === 0)) {
            arrayValue = "FizzBuzz";
        } else if (itteration % 3 === 0) {
            arrayValue = "Fizz";
        } else if (itteration % 5 === 0) {
            arrayValue = "Buzz";
        } else {
            arrayValue = itteration;
        }

        output.push(arrayValue);

        itteration++;
    }

    console.log(output);
}

fizzBuzz(5);
