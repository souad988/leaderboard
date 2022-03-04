//import _ from 'lodash';//eslint-disable-line
import './style.css';
import Game from './modules/games';
import Request from './modules/request';
const id="QzuepOdb4S7f14QxmbA0";
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const game=new Game(id);
const request = new Request(apiUrl);
const user=document.getElementById('user');
const score=document.getElementById('score');
const addScoreBtn=document.getElementById('addScore');
const refresh=document.getElementById('refresh');
addScoreBtn.addEventListener('click',()=>{
  game.addScore(user.value,score.value,request).then(res=>{
     if(res.status===201){
      alert('score added successfuly.');
    }else{
      alert('server doesn\'t respond');
    }
  })
 
});
refresh.addEventListener('click',async()=>{
  var list=await game.getScore(request);
 console.log('from index js ',list) ;
})
function addScoreToDom(score){
  return `<li class="score_row">${score.user}:${score.score}</li>`;
}