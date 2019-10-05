/* Print Fibonacci Sequence. */
function fibonacciGenerator (n) {
    if (n === 0) {
        return fibonaciSequence = [];
    } else if (n === 1) {
        return fibonaciSequence = [0];
    } else {
        var fibonaciSequence = [0,1];
        var firstNumber = 0;
        var secondNumber = 1;

        for (var i = 2; i < n; i++) {
            var fibonaciNumber = firstNumber + secondNumber;
            fibonaciSequence.push(fibonaciNumber);
            firstNumber = secondNumber;
            secondNumber = fibonaciNumber;
        }
    }

    //Return an array of fibonacci numbers.
    return fibonaciSequence;
}

console.log(fibonacciGenerator(8));
