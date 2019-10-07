// 3초 후에 hello를 한번 출력하고 종료한다.

setTimeout(() => console.log('hello'), 3000);

setTimeout = () => { console.log('Bye'),3000};

/*
해결하기 !
첫번째 줄은 실행이 되는데
왜 두번째줄은 실행이 안될까??? 오류는 안나는데.
두번째줄이 ES6 화살표함수  형식 아닌가!
 */