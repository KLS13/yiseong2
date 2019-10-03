const studentList = [
    { name: 'kyeongrok', age: 31, math: 85, science: 75 },
    { name: 'jihyun', age: 31, math: 95, science: 83 },
    { name: 'minsup', age: 35, math: 76, science: 98 },
];
const plus = (a, b) => a + b;
studentList.forEach(student => console.log('%s total:%d', student.name, plus(student.math, student.science)));

console.log('--------------------');

studentList.forEach((student) => {
    console.log('%s total:%d', student.name, plus(student.math, student.science));
});

// 6번줄에서 선언한 plus 함수에  student.math, student.science 두가지 값을
// 넘겨주고 리턴받은 값을 출력함.
//forEach를 쓸 때, forEach( student 에는 studentList 의 한줄이 들어감.
// => 화살표 뒤에는 name,math 등등 쓸 수 있음