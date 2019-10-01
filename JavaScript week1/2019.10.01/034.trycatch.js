try {
    //console.log('hello');
    printMessage('hello');
} catch (e) {
    console.log('error:', e);
}

console.log('program finished');

// try catch --> 에러로 인해 프로그램이 멈추는 것을 예방함.
// printMessage 함수가 선언되지 않은 상태에서 호출하려고 했기에 에러 발생.

try {
    console.log('에러가 나기 직전까지의 코드는 잘 실행됩니다.');
    console.log(foo);
    console.log('에러가 난 이후의 코드는 실행되지 않습니다.');
} catch (e) {
    if(e.name === 'RangeError') {
       console.log(`배열 생성자에 잘못된 인수가 입력되었습니다.`)
    } else if (e.name === `ReferenceError`) {
        console.log(`선언되지 않은 변수가 사용되고 있습니다.`)
    }
    console.log('코드의 실행 흐름이 catch 블록으로 옮겨집니다.');
}