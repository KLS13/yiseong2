function grandParent(g1, g2) {
    const g3 = 10;
    const g4 = 10
    return function parent(p1, p2) {
        const p3 = 20;
        const p4 = 20
        return function child(c1,c2) {
            const c3 = 100;
            return g1+ g2 + g3 + g4 + p1 + p2 + p3 + p4 + c1 + c2 + c3;
        };
    };
}
const parentFunction = grandParent(10,20);
const childFunction = parentFunction(10,20);
console.log(childFunction(100,200));

//grandParent 함수는 g3 라는 내부 변수를 가지고 있으면서 parent 함수 리턴
// parent 내부에 p3 변수를 가지고 있고, child 함수를 리턴함.
//child 함수는 c3 라는 변수를 가지고 있고, 자신의 외부 함수인 grandParent의 파라미터와
// 그 변수, 또 다른 외부함수인 parent의 파라미터와 그 변수 그리고 자신의 파라미터와 변수의 총합을 리턴함.