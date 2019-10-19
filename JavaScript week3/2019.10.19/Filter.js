const ages = [11,12,13,16,21,31];

const upper16 = ages.filter(age => age > 16);
const upper13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16 : ', upper16);
console.log('upper13 : ', upper13);
console.log('between12And21 : ', between12And21);

//   .filter( item => 조건 );
//  true false 로 판단하여 true 인 것만  push하는 방식이다.