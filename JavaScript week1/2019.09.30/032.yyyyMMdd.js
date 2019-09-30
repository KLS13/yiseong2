const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    //삼항연산자를 통해 한자리 숫자의 "월" 이 나올경우 앞에 0을 붙여줌.
    return `${yyyy}-${mm}-${dd}`;
};

const yyyymmdd = getYymmdd(new Date());
const yyyymmdd170909 = getYymmdd(new Date(2017, 9 - 1, 9));
console.log('yyyymmdd:', yyyymmdd);
console.log('yyyymmdd170909:', yyyymmdd170909);
//date.getMonth()만 사용할 경우 2017-9-9 처럼 출력된다.
