const Highscores = [];

function getScores() {
  fetch("http://127.0.0.1:5000/api/users")
    .then((response) => response.json())
    .then((data) => {
      Highscores.push(...data);
      updateHighscores(Highscores);
    })
    .catch((error) => console.error(error));
}

function newScore(score) {
  fetch("http://127.0.0.1:5000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(score),
  })
    .then((response) => response.json())
    .then((data) => {
      Highscores.push(...data);
      updateHighscores(Highscores);
    })
    .catch((error) => console.log("Error!"));
}

function updateHighscores(scores) {
  console.log(scores);
}

// getScores();

const score = {
  name: "xxx",
  score: 1900,
};
newScore(score);
