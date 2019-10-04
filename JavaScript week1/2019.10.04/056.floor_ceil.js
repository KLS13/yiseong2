const floor1 = Math.floor(45.95); //  45
const floor2 = Math.floor(4); //   4
const floor3 = Math.floor(NaN); //   NaN
const floor4 = Math.floor(-45.05); // -46

const ceil1 = Math.ceil(7.004); // 8
const ceil2 = Math.ceil(-0.95); // -0
const ceil3 = Math.ceil(-4); // -4
const ceil4 = Math.ceil(-7.004); // -7

console.log('floor1:', floor1);
console.log('floor2:', floor2);
console.log('floor3:', floor3);
console.log('floor4:', floor4);
console.log('ceil1:', ceil1);
console.log('ceil2:', ceil2);
console.log('ceil3:', ceil3);
console.log('ceil4:', ceil4);

//Math.floor() 바닥함수로 인수는 항상 실수값이 들어와야함.
// 따라서 NaN인 경우 구할수 없으므로 그대로 NaN을 리턴함.
//해당 값보다 같거나 작은값 -->  45.95 는 45 ,  4인경우 4  -45.05인 경우 -46
//Math.Ceil() 도 바찬가지로 실수값을 인수로 받음.
//해당 값보다 같거나 큰 가장 가까운 정수를 리턴함.
//즉 7.004인 경우 8,  -0.95 는 0