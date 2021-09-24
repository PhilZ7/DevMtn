//20210909
//Coding exercise, nested arrays


//Printing array for user
let myArr = [[1],[2],[3],[4],[5]];
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

//Identifying numbers (even or odd)
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 === 0) {
        console.log("is even!");
        } else {
          console.log("is odd!");
        }
}