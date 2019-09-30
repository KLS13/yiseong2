const today = new Date();
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 3);
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
console.log('===========================================');

console.log('===============날짜 출력하기================');
const date = new Date(2017, 8, 3, 18, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());

console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth() + 1); // .getMonth() 월은 0부터 세기때문에 +1 을 해줌
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());
