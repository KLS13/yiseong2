const promiseResult = new Promise((resolve) => {
  resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
  return `${result}hello`;
}).then((result) => {
  console.log('second:', result);
  return `${result}nello`;
});




const promiseA = new Promise((resolve) => {
  resolve('java');
}).then((A) => {
  console.log(A);
  return `${A}열심히 배우자`;
}).then((A) => {
  console.log(A);
  return `${A}JSP도 하자`;
});

promiseResult.then(result => console.log(result));
promiseA.then(A=>console.log(A));