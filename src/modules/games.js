
export default class Game {
  constructor(id) {
    this.id =id; 
    this.scores = [];
  }

  addScore(user,score,request){
    return request.post([this.id,'scores'].join('/'),{user,score}) 
    }
  async getScore(request){
    var response=await request.get([this.id,'scores'].join('/'));
    
    console.log(result);
    this.scores=result.value.result;
    return this.scores;  
}
}