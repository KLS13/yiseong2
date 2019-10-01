const students = [
    {name : 'yiseong', age : 26, score: 100, gender : '남자'},
    {name : 'java', age : 31, score: 80, gender : '남자'},
    {name : 'alicem', age : 27, score : 86, gender : '여자'}
    ];
function grade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
students.forEach((student) => {
    const result = `name : ${student.name}, score : ${grade(student.score)}`;
    console.log(result);
});