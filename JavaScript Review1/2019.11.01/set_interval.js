setInterval(() => console.log('hello'), 1000); // 1초에 1번씩 'hello'출력하기

const printBye = () => console.log('bye'); // 2초에 1번씩 bye출력하기
setInterval(printBye, 2000);


setInterval( () => console.log('Hi'),1000);

const print = () => {
    console.log('print 2초마다 출력');
}

setInterval(print, 2000);