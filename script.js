const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Allows jokes to generate when button is clicked
jokeBtn.addEventListener('click', generateJoke)

// Calls function to be run
generateJoke()

// Using async/await
async function generateJoke(params) {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
      const data = await res.json()
      jokeEl.innerHTML = data.joke
      
}

// Using .then()
/* function generateJoke(params) {
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
}*/
