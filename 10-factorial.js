const x = Number(process.argv[2]);

function factorialFn (x) {
    if (isNaN(x)){
        return 1;
    }
    if (x <2) {
        return 1;
    } return x * factorialFn(x - 1);
}
console.log(factorialFn(x));