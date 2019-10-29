const user = { name: 'kyeongrok', age: 31 };
console.log('user:', user);
console.log('user.name:', user.name);
console.log('user.age:', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);
//==============================================================================
const student = {name : 'java', age : 30, money : 20000, job : 'police'};
console.log(student.job);
student.nation = 'korea';
console.log(student.nation);