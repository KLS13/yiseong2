const destination = ['런던', '파리', '로마'];

console.log(destination);

// shift()
console.log(destination.shift());
console.log(destination);

// unshift()
destination.unshift('뉴욕');
console.log(destination);

console.log('=====================================================');

const arr = ['서울', '인천', '부산'];

console.log(arr.shift()); // 첫번째 값 제거 --> 삭제된값 반환
console.log(arr); // 서울 빼고 출력되는 것을 확인
arr.unshift('부산');
console.log(arr);
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);
