const sign1 = Math.sign([3]); //  1
const sign2 = Math.sign(-3); // crawler.js
const sign3 = Math.sign('-3'); // crawler.js
const sign4 = Math.sign(3/-0); //  0
const sign5 = Math.sign(NaN); // NaN
const sign6 = Math.sign('foo'); // NaN
const sign7 = Math.sign(); // NaN

console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);

//일반적으로 값이 양수인지 음수인지 판별하는 상황에서는
/// 0보다 큰지 작은지 비교하지만, 함수형 프로그래밍 패러다임에서는
//가능하면 코드를 함수화 하는 것이 바람직.  Math.sign()--> + ,- 를 판별
// 양수면 +1 ,  음수면 -1 을