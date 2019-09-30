const studentList = [
    { name: 'kyeongrok', age: 31, score: 85 },
    { name: 'jihyun', age: 31, score: 95 },
    { name: 'minsup', age: 35, score: 76 },
    { name: 'yuna', age: 31, score: 94 },
];

let resultStudent = '';
for (let index = 0; index < studentList.length; index +=1) {
    if (studentList[index].name === 'minsup') {
        resultStudent = studentList[index];
        break;
    }
    console.log(studentList[index].name, '은 minsup이 아닙니다.');
}

console.log('resultStudent:', resultStudent);

console.log('=====================================');


let a = [];
a.push(5); a.push(3); a.push(5);
a.push(7); a.push(2); a.push(5);
a.push(7); a.push(3); a.push(8);

for ( let i=0; i<=a.length; i+=1){
    if(a[i] % 2 == 0) {
        console.log(a[i], '는 짝수입니다.');
        break;
    }
}