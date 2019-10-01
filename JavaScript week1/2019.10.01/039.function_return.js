//함수 값의 반환
function  sum(a,b) {
    const r = a+b;
    return r;
    }

    const result = sum(200,500);
console.log(result);
console.log(`${'값은'}`, result);

// 200과 500은 파라미터로써 함수로 전달하고 sum 함수를 통해 결과값을 r 로 리턴함.
// 리턴된 값은 다시 result 에 삽입되어, console 창으로 출력됨.