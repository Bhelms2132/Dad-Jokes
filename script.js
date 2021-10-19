const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Allows jokes to generate when button is clicked
jokeBtn.addEventListener('click', generateJoke)

// Calls function to be run
generateJoke()


function generateJoke(params) {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
      .then((res) => res.json())
      .then((data) => {
          jokeEl.innerHTML = data.joke
      })
}
