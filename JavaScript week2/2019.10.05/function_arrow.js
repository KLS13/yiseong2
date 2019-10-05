function printHello() {
    console.log('hello');
}

const printBye = () => {
    console.log('bye');
}

printBye();

console.log('===========================================');
const printMessage = (pMessage) => {
    console.log(pMessage);
}
printMessage('aaa');

const sum = (a,b) => {
    console.log(a+b);
}

sum(5,5);


const studentList = [
    { name: 'yiseong', age: 31, math: 85, science: 75 },
    { name: 'java', age: 31, math: 95, science: 83 },
    { name: 'node.js', age: 35, math: 76, science: 98 },
];
const plus = (a, b) => a + b;
studentList.forEach(student => console.log('%s total:%d', student.name, plus(student.math, student.science)));

console.log('=======================================');

studentList.forEach((student) => {
    console.log('%s total:%d', student.name, plus(student.math, student.science));
});
