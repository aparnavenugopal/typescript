function add(n1: number, n2: number, show: boolean){
    // return n1 + n2;
// const r= n1 + n2;
if(show){
    console.log("result is:",n1+ n2);
}else{
    return n1+n2;
}
}

const number1 = 5;
const number2= 2.8;
const printResult = true;

const result = add(number1, number2, printResult);
console.log(result);

