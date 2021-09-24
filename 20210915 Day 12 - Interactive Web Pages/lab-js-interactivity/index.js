console.log('Hailing frequencies open');

var message = document.querySelector('#message');

function addMovie(event) {
  event.preventDefault();
  var inputField = document.querySelector('input');

  var movie = document.createElement('li');

  var movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  movieTitle.addEventListener('click', crossOffMovie);
  
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);

  var list = document.querySelector('ul');
  list.appendChild(movie);

  inputField.value = "";

}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie deleted.";
}

function crossOffMovie(event) {
  event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
    message.textContent = "Movie watched!"
  } else {
    message.textContent = "Movie added back!"
  }
}

document.querySelector('form').addEventListener('submit', addMovie);