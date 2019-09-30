const listUser = [
    { name: 'yiseong', age: 26 },
    { name: 'jihyun', age: 31 },
    { name: 'minsup', age: 35 },
];
/*
listUser.forEach(function(user){
    console.log(user);
});*/

listUser.forEach((user) => {
    console.log(user);
});
console.log('==============================');
// arrow function
listUser.forEach(user => console.log(user));

