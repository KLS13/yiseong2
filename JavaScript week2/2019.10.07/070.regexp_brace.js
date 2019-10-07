const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');
const replace = string.replace(/<.{0,1}h2>/g, '세일가');

console.log(replaceH1);
console.log(replaceTags);
console.log(replace);
