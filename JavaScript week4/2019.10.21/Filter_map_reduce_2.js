const testList = [
    { name: 'kyeongrok', age: 31, department: 'development' },
    { name: 'jihyun', age: 31, department: 'design' },
    { name: 'minsup', age: 35, department: 'development' },
];

const developerAgeList = testList

    .filter(test => test.department === 'development')
    //필터함수는 development 필드값이 'development'이 같은지 비교한 후 false면 필터링하여 제외함.
    .map(test => test.age); //map 로 age필드의 나이값들로 정리하여 developerAgeList 에 넣는다.
console.log(developerAgeList.reduce((a, b) => a + b)); // 개발팀의 나이 합계
// reduce 함수까지 적용하여 값을 리턴
// 실제 프로젝트에서는 또 다른 활용을 위해 중간 결과값을 받아서 저장하는 경우도 있음.
// 필터에서 디자인은 제외되서 --->  나이 31 35만 더해짐.
