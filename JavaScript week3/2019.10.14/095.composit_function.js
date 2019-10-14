const multiple5 = x => x*5;
const add10 = x => x+10;

const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

console.log(multiple5(add10(20)));
//          multiple5(x) x값 파라미터 안에는 add10  파라미터에 20 + 10
//            30이 들어어감.  즉 30*5 는 150;
console.log(plus(minus(20,30),40));
    // 마이너스의 파라미터는 20과 30 이 계산된 값
// 즉  plus의 파라미터는 -10과 40이 됨.
