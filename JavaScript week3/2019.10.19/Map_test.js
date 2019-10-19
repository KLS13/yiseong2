// define
const listEmployee = [
    { name: 'kyeongrok', age: 31, salary: 40000 },
    { name: 'jihyun', age: 31, salary: 50000 },
    { name: 'minsup', age: 35, salary: 60000 },
];

// process

const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSalaryList.forEach(salary => console.log('salary : %d', salary));

// 풀어쓴다면
const raisedSalarylist = [];
for (employee of listEmployee) {
    raisedSalaryList.push(employee.salary * 1.1);
}
for(salary of raisedSalaryList) {
    console.log('salary : %d', salary);
}