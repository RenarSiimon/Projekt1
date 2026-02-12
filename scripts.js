const jokeBox = document.getElementById("joke");
const jokeBtn = document.getElementById("JokeBtn");

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeBox.textContent = data.value; 
}

jokeBtn.addEventListener("click", getJoke);