const text = 'hello my name is kyeongrok';
const matched = text.match(/[a-l]{1,3}/g);

console.log(matched);

const name = 'kangyiseong';
const match2 = name.match(/[a-k]{1,2}/g);

console.log(match2);
