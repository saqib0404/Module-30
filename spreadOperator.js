const math = Math.max( 145, 125, 300, 25);

const numbers = [ 145, 125, 300, 25];
console.log(Math.max(...numbers, 500));

const numbers2 = [...numbers, 10, 25 ];
// numbers2.push(10, 25);
console.log(numbers2);