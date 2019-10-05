/*
try{
    console.log('Hello');
} catch(e) {
    console.log('error');
}
console.log('프로그램 피니시 !');
*/
try{
    console.print('Hello');
} catch(e) {
    console.log('error');
}
console.log('프로그램 피니시 !');

console.log('==============================================');
const print = () => console.log('hello');

try{
    print();
}catch(e) {
    console.error(e);
}finally {
    console.log('finally1')
}

try{
    print2();
}catch(e){
    console.error(e);
}finally {
    console.log("finally2")
}