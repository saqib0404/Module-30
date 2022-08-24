/* 
Q:  Write an arrow function where it will do the following:
        a) It will take two array inputs
        b) Combine the two arrays and assign them in a new array
        c) Find the maximum number from the new array and return the
        result
Print the result.
*/

const maxNumber = (a, b) => {
    const newArr = [...a, ...b];
    return Math.max(...newArr);
}

const arr1 = [10, 20, 30, 40, 500, 600];
const arr2 = [11, 22, 33, 44, 550, 660];

console.log(maxNumber(arr1, arr2));