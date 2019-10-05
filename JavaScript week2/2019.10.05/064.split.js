const dateString = '2017-08-24 11:00:00';

// split
const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];

// print
console.log('date : %s', date);
console.log('time : %s', time);

const result = 'abc'.split('b');
console.log('result', result);

const str = 'Hello';

const str1 = str.split('e')[0];
const str2 = str.split('e')[1];
console.log(str1,str2);

const str_age = '123 456 789';
const age1 = str_age.split(' ');
const age2 = str_age.split(' ')[0];
const age3 = str_age.split(' ')[2];

console.log(age1);
console.log(age2);
console.log(age3);
