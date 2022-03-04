const addNewScore = async (game, user, score, request) => {
  const response = await game.addScore(user, score, request);
  return response;
};

const createScoreElement = (score) => `<li class="score_row">${score.user}:${score.score}</li>`;

const addScoresToDom = async (request, game, ulElement) => {
  const scores = await game.getScores(request);
  ulElement.innerHTML = '';
  scores.result.forEach((item) => {
    ulElement.innerHTML += createScoreElement(item);
  });
};

const toggleMsg = (msg, classname, toggle, p) => {
  if (toggle === 'show') {
    p.classList.add(classname);
    p.innerHTML = msg;
  } else {
    p.classList.remove(classname);
    p.innerHTML = '';
  }
};
const displayMsg = async (msg, classname, p, delay) => new Promise((resolve) => {
  toggleMsg(msg, classname, 'show', p);
  setTimeout(() => {
    resolve(toggleMsg('', classname, 'hide', p));
  }, delay);
});
export {
  addNewScore, addScoresToDom, toggleMsg, displayMsg,
};
