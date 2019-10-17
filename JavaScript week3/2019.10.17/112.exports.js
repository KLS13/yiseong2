const printHello = () => console.log('hello');

exports.printHello = printHello;

exports.printMessage = (message) => {
    console.log(message);
};

//exports.함수 이름 = 위에서_선언한_함수_이름
//exports.함수 이름 = (message) => { console.log(message); }
