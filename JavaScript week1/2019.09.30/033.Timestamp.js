const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1570274211107);
const timestampToInit = new Date(1);

console.log('Date to timestamp:', dateToTimestamp);
console.log('Timestamp to date:', timestampToDate);
console.log('Initial timestamp:', timestampToInit); // 최초날짜가 만들어짐.

// date.getTime()을 이용해 타임스탬프를 생성할 수 있음.