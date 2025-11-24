function doMathOperation(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}

doMathOperation(5, 3, (result) => {
    console.log('The sum is:', result); 

console.log('Calculation started...'); 