/* Print Fibonacci Sequence. */
var n = 8;
var fibonaciArrray = [];

for (var i = 0; i < n; i++) {
    if (i <= 1) {
        fibonaciArrray.push(i);
    } else {
        var firstNumber = fibonaciArrray[i - 2];
        var nextNumber = fibonaciArrray[i - 1];

        fibonaciArrray.push(firstNumber + nextNumber);
    }
}

console.log(fibonaciArrray);
