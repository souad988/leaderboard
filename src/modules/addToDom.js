

const addNewScore=(game,user,score,request)=>{
     game.addScore(user,score,request).then(res=>{
     if(res.status===201){
      alert('score added successfuly.');
    }else{
      alert('server doesn\'t respond');
    }
  }) 
}



const createScoreElement=(score)=>{
  return `<li class="score_row">${score.user}:${score.score}</li>`;
}

const addScoresToDom = async(request,game,ulElement)=>{
  var scores=await game.getScores(request);
  ulElement.innerHTML='';
  scores.result.map(item=>{
    ulElement.innerHTML+=createScoreElement(item);
  });
}

export {addNewScore,addScoresToDom};

