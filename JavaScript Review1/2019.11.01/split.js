const dateString = '2017-08-24 11:00:00';

// split
const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];

// print
console.log('date : %s', date);
console.log('time : %s', time);

const result = 'abc'.split('b');
console.log('result', result);

const name = 'kang-yiseong';
const myname = name.split('-');

console.log(myname[0]);

if(myname[0] === name.split('-')[0]) {
    console.log('같다');
}
