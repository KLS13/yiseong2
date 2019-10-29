const num1 = 1;
const num2 = 2;
const list = [1, 2, 3, 4];
const emptyList = [];
const numList = [];

const result = num1 > num2 ? 'num1' : 'num2';
console.log(result, '이(가) 더 큽니다.');

numList.push(10);
numList.push(20);
numList.push(30);
numList.push(40);

list.length > 0 ? console.log(list) : console.log('list가 비었습니다.');
emptyList.length > 0 ? console.log(list) : console.log('list가 비었습니다.');
numList.length === list.length ? console.log('같음') : console.log('다름');