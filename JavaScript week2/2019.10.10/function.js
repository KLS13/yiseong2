function print() {
    console.log('Hello');
}
print();

const printBye = () => {
    console.log('bye');
}

printBye();

const sum = (a ,b) => {
    console.log(a+b);
}
sum(5,1);

function sum_2(a,b) {
    const r = a+b;
    return r;
}
const result = sum_2(10,5);
console.log(result);

function plus(a,b) {
    return a + b;
}
function minus(a,b) {
    return a - b;
}
let p = plus;
console.log("plus --> %s",typeof plus);
console.log("p --> %s",typeof p);
console.log("10 + 20 = %d", p(10,20));

function calculate(a,b,func) {
    return func(a, b);
}

console.log(calculate(10,20,minus));
