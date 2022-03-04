// import _ from 'lodash';//eslint-disable-line
import './style.css';
import Game from './modules/games.js';
import Request from './modules/request.js';
import {
  addNewScore, addScoresToDom, displayMsg,
} from './modules/addToDom.js';

const id = 'QzuepOdb4S7f14QxmbA0';
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const game = new Game(id);
const request = new Request(apiUrl);
const user = document.getElementById('user');
const score = document.getElementById('score');
const addScoreBtn = document.getElementById('addScore');
const refresh = document.getElementById('refresh');
const scoreList = document.querySelector('.scores_list');
const msgContainer = document.querySelector('.msg');

addScoresToDom(request, game, scoreList);

addScoreBtn.addEventListener('click', async () => {
  const response = await addNewScore(game, user.value, score.value, request);

  if (response.status <= 201) {
    await displayMsg('new score added successfully!', 'success_msg', msgContainer, 5000);
  } else if (response.status < 500) {
    await displayMsg('Enter a valid username and a valid score!', 'error_msg', msgContainer, 5000);
  } else {
    await displayMsg('Server doesn\'t respond!', 'error_msg', msgContainer, 5000);
  }
});

refresh.addEventListener('click', async () => {
  addScoresToDom(request, game, scoreList);
});