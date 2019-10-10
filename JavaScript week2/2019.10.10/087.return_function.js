const returnFunction = () => (a,b) => a+b;
// 화살표 함수 2번이상 사용 --> 커링
//returnFunction 함수는 파라미터를 갖지 않는 함수이지만
//내부적으로 두 파라미터를 받아 그 합을 리턴하는 함수 그 자체를 리턴하는 함수가 됨.
const plus = returnFunction();

console.log(plus(10,20));
