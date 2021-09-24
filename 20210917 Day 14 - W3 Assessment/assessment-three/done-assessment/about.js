console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

// Duck picture responds
let duckPick = document.querySelector('#duckPic');

function duckPicComp() {
  alert("You're so cute...catch this shuriken for me!")
};

// Random restaurant recommendation
const randomBtn = document.querySelector('#randomRest');

let result = document.querySelector('#footer');

var myRecos = ['https://ouzimediterraneangrill.com/', 'https://www.corkandpig.com/', 'https://subznstuff.site/'];

// const random = Math.floor(Math.random() * myRecos.length);

// function randomReco(min, max) {
//   let step1 = max - min + 1;
//   let step2 = Math.random() * step1;
//   let results = Math.floor(step2) + min;

//   return result;
// }

// randomBtn.addEventListener('click', () => {
//   let index = randomReco(0, myRecos.length-1);
//   result.innerText = myRecos[index]
//   console.log(result);
// }
