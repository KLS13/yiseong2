const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace( /<h1>/g, '');
console.log('result1:', result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:', result2);                                       // 특수문자 앞이라 역슬래시

//정규표현식을 이용해 문자열에서 내가 필요한 부분만 골라낼 수 있다.
//   /<정규표현식>/g 형식을 사용하면 문자열 전체에서 해당 부분을 찾을 수 있음.

