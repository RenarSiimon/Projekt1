let jokeText = document.getElementById("joke");
let getJokeButton = document.getElementById("JokeBtn");
let showPunchlineButton = document.getElementById("Punchline");
let savedPunchline = "";

async function getJoke() 
{
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokeData = await response.json();
    jokeText.textContent = jokeData.setup;
    savedPunchline = jokeData.punchline;
}
function showPunchline() 
{
    jokeText.textContent = jokeText.textContent + "\n\n" + savedPunchline;
}
getJokeButton.addEventListener("click", getJoke);
showPunchlineButton.addEventListener("click", showPunchline);