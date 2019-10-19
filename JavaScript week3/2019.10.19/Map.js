//   .map(item => item * 10);

const list = [11,22,33];

const map_testList = list.map(item => item * 10);
map_testList.forEach(item => console.log(item));

// map_testList[] 형태로 남아지는것임.
console.log(map_testList[0]);