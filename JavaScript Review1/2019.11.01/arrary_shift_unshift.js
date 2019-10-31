const destination = ['런던', '파리', '로마'];

console.log(destination);

// shift()
console.log(destination.shift()); // 첫번째꺼 빼기
console.log(destination);
console.log(destination.shift()); // 또 빼기
console.log(destination);
console.log(destination.shift()); // 또 빼기
console.log(destination);

// unshift()
destination.unshift('뉴욕');// 첫번쨰 칸에 넣기
console.log(destination);
destination.unshift('서울');// 첫번쨰 칸에 넣기
console.log(destination);
destination.unshift('부산');// 첫번째 칸에 넣기
console.log(destination);
