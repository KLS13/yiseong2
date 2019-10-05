const str1 = 'hello';
const str2 = 'bye';
const str3 = 'baby';
const str4 = 'java';
const str5 = '(안녕)';

const str1_ = str1.replace('he','ol');
console.log(str1_);

const str2_ = str2.replace('bye',' ');
console.log(str2);

const str3_ = str3.replace('baby','snow');
console.log(str3);

const str4_ = str4.replace('ja','D.');
console.log(str4);

const str5_ = str5.replace('(','{').replace('(','}');
console.log(str5);