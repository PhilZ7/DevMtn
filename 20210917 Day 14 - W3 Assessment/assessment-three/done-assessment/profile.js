const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');

function myFavColor() {
  alert("My favorite color is: 179,0,31")
};

function myFavPlace() {
  alert("My favorite place is: England")
};

function myFavRitual() {
  alert("Clear mind in the morning, a smoothie, reading, work/learning, planning/prioritizing next steps, review past successes and where to improve. Repeat.")
};

favColor.addEventListener('click', myFavColor);
favPlace.addEventListener('click', myFavPlace);
favRitual.addEventListener('click', myFavRitual);


