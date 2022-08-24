function add (num1 = 50, num2 = 50){
    // num2 = num2 || 50;
    // if(num2 === undefined){
    //     num2 = 50;
    // }
    const result = num1 + num2;
    return result;
}
// console.group(add(10,));


function fullName (first = 'Saqib', last = 'Ahmad'){
    const name = first + ' ' + last;
    return name;
}
console.log(fullName('Soleh'));