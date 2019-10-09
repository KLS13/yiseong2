// 배열 선언
const destinationName = [
    '런던',
    '로마',
    '파리',
    '암스테르담',
];

const serchArr = '파리';
const arr1 = '로마'

for (let i = 0; i < destinationName.length; i++) {
    if (serchArr === destinationName[i]) {
        console.log(serchArr, '입니다');
        break;
    }
}

for( let i = 0 ; i<destinationName.length; i++){
    if(arr1 === destinationName[i]) {
        console.log(arr1, '입니다');
        break;
    }
}
