const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstViggerThenSecond = (first, second) => {
    if(first > second) return true;
    return false;
} //true는 위치를 바꾸고, false를 반환하면 위치를 바꾸지않음.
const sortedNumbers = numbers.sort(isFirstViggerThenSecond);
console.log(sortedNumbers);

