import { AyahInteface } from "../interfaces/AyahInterface";

export class GameScoreBoard
{
    score: number = 0;

    incrementScore() {
        this.score = this.score + 1;
    }

    decrementScore() {
        this.score = this.score - 1;
    }

    updateScore(id: number, goodVerseAnswer: AyahInteface): void
    {
        if (id === goodVerseAnswer.number) {
            this.incrementScore()
        } else {
            this.decrementScore()
        }
    }
}