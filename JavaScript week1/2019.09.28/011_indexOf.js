const string = 'hello';
const string2 = 'helelelelello';
const string3 = 'the method then selects elements from the start argument';

console.log('hel :', string.indexOf('hel'));
console.log('el :', string.indexOf('el'));
console.log('elelel :', string2.indexOf('el'));
console.log('method :', string3.indexOf('method'));
console.log('ye :', string3.indexOf('ye'));

// 문자열에 특정 문자열이 있는지, 몇 번째에 있는지 알고싶을때
// indexOf()를 사용함..  1~100글자 이상 가능.
// 없는것은 -1 을 리턴함.