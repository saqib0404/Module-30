/* 
Q:  Write an arrow function where it will do the following:
        a) Square each array element
        b) Calculate the sum of the squared elements
        c) Return the average of the sum of the squared elements

Print the result.
*/

const complexedMath = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const square = number ** 2;
        sum = + square;
    }
    const average = sum / numbers.length;
    return average;
}
// 1+ 4 +9 + 16 +25
const numbers = [1, 2, 3, 4, 5];
console.log(complexedMath(numbers));