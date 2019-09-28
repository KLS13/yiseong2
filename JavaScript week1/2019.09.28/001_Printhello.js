//ES5 스타일
function printHelloEs5() {
    console.log('hello es5');
}
//ES6 스타일
const printHelloEs6 = () => {
    console.log('hello es6');
}

printHelloEs5();
printHelloEs6();

console.log('hello');
console.log('hello', 'bye');
console.warn(`this line ${'can make error'}`)
// ` 백틱을 사용. ( 탬플릿처럼 사용할 수 있다. )
// 실행은 Ctrl Shift F10