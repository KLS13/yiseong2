const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));


const rF = () => (a,b) => a+b;

const sum = rF();

console.log(sum(10,20));