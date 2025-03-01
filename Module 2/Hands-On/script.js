const freeGame = document.getElementById('freeGame');
const button = document.getElementById('gameDispenser');

function getGame() {
    freeGame.textContent = 'Fetching a game...';

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b2dab0e4amsh3472c4d3cfe2a69p1b3120jsn8a31333b740a', // Replace with your actual API key
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }).then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomGame = data[randomIndex];

        freeGame.textContent = `🎮 ${randomGame.title}`;
        console.log("Game given:", randomGame.title);
    }).catch(error => {
        console.error("Fetch error:", error);
        freeGame.textContent = "🚨 Failed to fetch a game. Try again later!";
    });
}

button.addEventListener("click", getGame);
