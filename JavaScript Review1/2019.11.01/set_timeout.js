// 3초 후에 hello를 한번 출력하고 종료한다.
setTimeout(() => console.log('hello'), 3000);

print = () => {
    console.log('3초뒤 출력후 종료');
}

setTimeout(print,3000);