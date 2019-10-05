/*
// 일반 함수
var foo = function () { console.log("foo") }; // foo

// 화살표 함수
var bar = () => console.log("bar"); // bar
*/
// 매개변수가 없는 경우
var foo = () => console.log('bar');
foo(); // bar

// 매개변수가 하나인 경우
var foo = x => x;
foo('bar'); // bar

// 매개변수가 여려개인 경우
var foo = (a, b) => a + b; // 간단하게 한줄로 표현할 땐 "{}" 없이 값이 반환됩니다.
foo(1, 2); // 3

var foo = (a, b) => { return a + b };
foo(1, 2); // 3

var foo = (a, b) => { a + b }; // "{}"를 사용했는데 return이 없을 때
foo(1, 2); // undefined

var foo = (a, b) => { // 여러줄 썼을 때
    var c = 3;
    return a + b + c;
}
foo(1, 2, 3) // 6
/*
"{}"를 사용하면 값을 반환할 때 return을 사용해야 함.
"{}"를 사용하지 않으면 undefied를 반환해야 함.
"{}"을 사용할 때는 여러줄을 썼을 때 사용해야 함.
*/

// 객체를 반환할 때
var foo = () => ( { a: 1, b: 2, c: 3 } );
foo(); // { a: 1, b: 2, c: 3 };