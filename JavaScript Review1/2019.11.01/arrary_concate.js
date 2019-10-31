const part1 = ['kyeongrok', 'minsup'];
const part2 = ['jihyun', 'yuna'];
const part3 = ['dasom', 'mattheue'];

const team = part1.concat(part2);
const team2 = part1.concat(part2, part3);

console.log('team:', team);
console.log('team2:', team2);

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];
const num = [];
console.log(num.concat(num1,num2));
