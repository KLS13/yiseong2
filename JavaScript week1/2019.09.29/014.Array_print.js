const arCoffee = [];
console.log(arCoffee[0]); // 배열 안에 아무것도 없는데 값을 뽑으려면
                          // --> undefined 출력

console.log(arCoffee.length); // 배열에 아무것도 없으므로 --> 0 출력

arCoffee.push('아메리카노','자바스크립트','강이성');
console.log(arCoffee.length); //길이. 값이 3개 --> 3 출력
console.log(arCoffee[0]); //첫번째값을 뽑으려면 [0]