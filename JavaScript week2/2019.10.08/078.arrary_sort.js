const numbers = [3, 6, 2, 8, 1];
const strings = [
    'timeoutsRemaining',
    'flagrantFouls',
    'defensive3Seconds',
    'jumpshots',
    'dunks',
    'layups',
];

const sortedNumbers = numbers.sort();  // sort를 이용해서 정렬
const sortedStrings = strings.sort();

console.log('sortedNumbers:', sortedNumbers);
console.log('sortedNumbersDesc:', sortedNumbers.reverse());
console.log('sortedStrings:', sortedStrings);
console.log('reverseSortDesc:', sortedStrings.reverse());
