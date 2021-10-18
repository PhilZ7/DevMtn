// Reference pointers
// Primitive datatypes: strings, numbers, booleans, undefined, null, symbol
// Reference datatypes: arrays, objects, functions

let myNum = 5;
let myNum2 = myNum;

myNum2 = 10;

//console.log(myNum2)

//console.log(muNum)

let mystr = 'hello';
let mystr2 = mystr;
let mystr3 = mystr2;
let mystr4 = mystr3;
let mystr5 = mystr4;

mystr3 = 'world';

//console.log(mystr2)
console.log(mystr4);

const myArr1 = [1,2,3];
const myArr2 = myArr1;

console.log(myArr1 === myArr2);

myArr2.pop();
console.log(myArr1);

const myArr3 = ['a','b','c'];
const myArr4 = ['a','b','c'];

console.log(myArr3 === myArr4);
console.log(JSON.stringify(myArr3) === JSON.stringify(myArr4));
console.log(myArr3);
console.log(typeof myArr3);
console.log(JSON.stringify(myArr3));
console.log(typeof JSON.stringify(myArr3));


const myArr5 = [true, false, true];
const myArr6 = [...myArr5]; // spread operator
const myArr7 = myArr5.slice(0);

console.log(myArr5 === myArr6);
console.log(myArr5 === myArr7);

console.log(myArr5);
console.log(...myArr5);

myArr5.forEach(el => console.log(typeof el, el))

const myObj = {
  myNum: 1,
  myStr: 'ayyy'
}

const myObj2 = {...myObj}
const myObj3 = Object.assign({}, myObj)

myObj3.myNum = 5;

console.log(myObj)

// Space Complexity

let count= 0;

function fibo(num) {
  console.log('fibo fired!')
  count +=1;
  if (num < 1) return 1;

  return fibo(num -1) + fibo(num - 2)  ;

}

//fibo(10) ran for about a second
//fibo(20) ran for about 6 seconds 
//fibo(30) ran for about 11 minutes

console.time(`fibo time`)
fibo(5);
console.timeEnd(`fibo time`)
console.log(`The count is: ${count}`);

functions fiboMemoized(num, storage) {
  count += 1;
  console.log('fiboMemoized fired!')
  
  storage = storage || {};
  if (storage[num]) {
    return storage[num];
  }

  if (num < 1) return 1;

  return storage[num] = fiboMemoized(num - 1, storage) + fiboMemoized(num - 2, storage)
}

console.time('fiboMemo');
fiboMemoized(10);
console.timeEnd('fiboMemo');
console.log(count);