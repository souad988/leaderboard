//import _ from 'lodash';//eslint-disable-line
import './style.css';
import Game from './modules/games';
import Request from './modules/request';
import {addNewScore,addScoresToDom} from './modules/addToDom';
const id="QzuepOdb4S7f14QxmbA0";
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const game=new Game(id);
const request = new Request(apiUrl);
const user=document.getElementById('user');
const score=document.getElementById('score');
const addScoreBtn=document.getElementById('addScore');
const refresh=document.getElementById('refresh');
const scoreList=document.querySelector('.scores_list');

addScoresToDom(request,game,scoreList);

addScoreBtn.addEventListener('click',()=>{
  addNewScore(game,user.value,score.value,request);
});


refresh.addEventListener('click',async()=>{
  addScoresToDom(request,game,scoreList);
})