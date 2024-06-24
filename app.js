function add(n1, n2, show) {
    // return n1 + n2;
    // const r= n1 + n2;
    if (show) {
        console.log("result is:", n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
