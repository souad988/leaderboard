const addNewScore = async (game, user, score, request) => {
  const response = await game.addScore(user, score, request);
  return response;
};

const createScoreElement = (score, medalColor) => `<li class="score_row"><strong>${score.user}:${score.score}</strong><i class="fas fa-medal ${medalColor}"></i></li>`;

const sort = (mscores) => {
  mscores.sort((a, b) => a.score - b.score);
  return mscores.reverse();
};

const addScoresToDom = async (request, game, ulElement) => {
  const response = await game.getScores(request);
  const scores = sort(response.result);
  ulElement.innerHTML = '';
  ulElement.innerHTML += createScoreElement(scores[0], 'gold');
  ulElement.innerHTML += createScoreElement(scores[1], 'argent');
  ulElement.innerHTML += createScoreElement(scores[2], 'bronze');
  scores.splice(0, 3);
  scores.forEach((item) => {
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
