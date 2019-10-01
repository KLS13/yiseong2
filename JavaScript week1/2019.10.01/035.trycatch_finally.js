const printHello = () => console.log('hello');

try {
    printHello();
} catch (e) {
    console.error(e);
} finally {
    console.log('finally1');
} // printHello 의 호출이 성공적으로 되었기때문에 catch문은 실행되지않는다.
 // 8번째 라인에서 finally로 인해 에러 여부와 상관없이 finally1 을 출력함.

try {
    printBye(); // 함수 선언 없음.
} catch (e) {
    console.error(e);
} finally {
    console.log('finally2'); // 에러 여부 상관없이 finally2 를 출력
}

