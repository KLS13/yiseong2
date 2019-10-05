const today = new Date();
const date = new Date(2019,10,6,18,30,30);

console.log(today.toLocaleDateString());
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getDay());
console.log(date.getDay());
console.log(date.getDate()+1);
console.log(today.getMonth()+1);

const dateToTimestamp = date.getTime();
console.log(dateToTimestamp);
const timestampToInit = new Date(1);

console.log(timestampToInit);