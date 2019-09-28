const greeting1 = 'hello';
const greeting2 = 'bye';
const name1 = 'kang';
const name2 = 'yiseong';

const statement = `${greeting1}! my name is ${name2}`;
const statement2 = `${greeting2}! my name is ${name2}`;
// 백틱 ${ } .....
console.log(`${greeting1}! my name is ${name1}`);
console.log(`${greeting2}! my name is ${name1}`);

console.log('statement:' , statement);
console.log('statement2:' , statement2);

// 백틱을 이용 --> 쉡게 포맷팅을 해서 출력가능.
// 출력뿐 아니라 포맷팅된 스트링 자체를 변수에 넣거나 리턴값으로 사용가능
// ES6 문법에서 권장함 !!