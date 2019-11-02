const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => (a + b));
const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);

console.log('sum :', sum);
console.log('sumWithInitValue :', sumWithInitValue);

// 값 누적

const age = [ 23,25,31,64,69];

const add = age.reduce((a,b) => (a+b));
console.log(add);