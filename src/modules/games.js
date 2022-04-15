export default class Game {
  constructor(id) {
    this.id = id;
    this.scores = [];
  }

  addScore(user, score, request) {
    return request.post([this.id, 'scores'].join('/'), { user, score });
  }

  async getScores(request) {
    const response = await request.get([this.id, 'scores'].join('/'));
    this.scores = response.json();
    return this.scores;
  }
}