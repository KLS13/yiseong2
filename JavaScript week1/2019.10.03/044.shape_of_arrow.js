const sumAndPrint = (a, b) => {
    const result = a + b;
    return `결과는 ${result}입니다.`;
};

const result = sumAndPrint(10, 20);
console.log(result);

//화살표 함수를 처음 사용할 때는 어디서 시작하고 어디서 끝나고,
//파라미터로 값은 어떻게 전달이 되고, return은 언제 되고 등
//생략되는게 많기 때문에 헷갈리는 경우가 많음!
// => 를 사용해 function 명령어를 줄이고 { } 이용해 여러줄로 사용 가능