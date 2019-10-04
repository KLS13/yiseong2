const greeting = 'hello';
const dateString = '2017-08-24T11:00:00';
const smallBracket = '()';

// replace
const replacedGreeting = greeting.replace('el', '');
const replacedDateString = dateString.replace('T', ' ');

// print
console.log('el 없애기 : %s', replacedGreeting);
console.log('T를 공백으로 : %s', replacedDateString);
// 특정문자열 바꾸기 !!

const  man = 'boy';
const person = man.replace('oy',' ');
console.log(person);

const parenthesis = smallBracket.replace('(','go').replace(')','od')
console.log(parenthesis);

