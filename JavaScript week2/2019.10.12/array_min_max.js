var num = [-1, 4, 10, 8, 15, 2, -25];

function findMax(array) {
    return Math.max.apply(null, array);
}
function findMin(array) {
    return Math.min.apply(null, array);
}

console.log(findMax(num));
console.log(findMin(num));