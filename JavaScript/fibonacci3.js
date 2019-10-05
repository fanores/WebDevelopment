/* Print Fibonacci Sequence. */
function fibonacciGenerator(n) {
    var fibonaciArray = [];
    for (var i = 0; i < n; i++) {
        if (i <= 1) {
            fibonaciArray.push(i);
        } else {
            var firstNumber = fibonaciArray[i - 2];
            var nextNumber = fibonaciArray[i - 1];

            fibonaciArray.push(firstNumber + nextNumber);
        }
    }
    return fibonaciArray;
}

console.log(fibonacciGenerator(5));
