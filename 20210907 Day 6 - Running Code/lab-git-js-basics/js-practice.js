console.log('hello world')

const firstName = 'Phil';

let age = 37;

// non string literal example
console.log('Hi my name is ' + firstName + ' and I am ' + age);

// string literal example
console.log(`Hi my name is ${firstName} and I am ${age}`);

let myBool = true;

if (myBool === false) {
    console.log(`hey hey`)
}

let myFavNum = 12;

if (myFavNum >= 12) {
    console.log('Your number is awesome!')
}

const num1 = 30;
const num2 = 25;

console.log(num1 > num2);

const multiplicationOfNums = num1 * num2;
const divisionOfNums = num1 / num2;

console.log(multiplicationOfNums);
console.log(divisionOfNums);    
console.log(multiplicationOfNums, divisionOfNums);