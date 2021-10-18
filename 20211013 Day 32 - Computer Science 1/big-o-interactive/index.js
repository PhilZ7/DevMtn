// What are the following time complexities?
function example() {
  let = 20; // 1 operation, O(1)
  let y = 30; //1 
}
// A: 1 + 1 = 2, O(1) Constant

---
// How many operations will the following loop execute
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// A: 1 + 10 = 11 ops

---
// What is the time complexity of the following
let arr = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < arr.length; i++) {
  console.log(i)
}
// 1 + n = O(n) Linear

---
// What is the time complexity of the following
for (let i = 0; i < fakearr.length; i++) { // n
  console.log(i) 
}

for (let i = 0; i < fakearr.length; i++) { // n
  console.log(i) 
}
// n + n = 2n = n = O(n)

---
// What is the time complexity of the following

for (let i = 0; i < 10; i++) { // n
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, ${j}`)
  }
}
// n * n = O(n^2) Quadratic