const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

console.log('isNaN123 :' , isNaN123);
console.log('isNaNMinus123: ', isNaNMinus123);
console.log('isNaN234 : ', isNaN234);
console.log('isNaNHello ', isNaNHello);

//isNaN은 연산결과가 숫자인지 아닌지 확인하는 것.
// 숫자이면 False ,  다른 타입이면 True