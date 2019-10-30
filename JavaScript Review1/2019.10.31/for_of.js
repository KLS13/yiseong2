const userList = [
  { name: 'kyeongrok', age: 31, score: 85 },
  { name: 'jihyun', age: 31, score: 95 },
  { name: 'minsup', age: 35, score: 76 },
];

for (const user of userList) {
  console.log('user:', user);
}

const studentList = [
  {name : 'java', grade : 'A'},
  {name : 'C', grade : 'B'},
  {name : 'Js', grade : 'C'},
];

studentList.forEach((stu) => {
  console.log(stu);
});

studentList.forEach(stu => console.log(stu));

for ( const stu of studentList) {
  console.log('stu : ', stu);
}

const i = 0;

if(studentList[i].grade === 'A') {
  console.log('java님');
}