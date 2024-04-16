export class GameScoreBoard
{
    // player: number
    score: number = 0;

    incrementScore() {
        this.score = this.score + 3;
    }

    decrementScore() {
        this.score = this.score - 1;
    }
}