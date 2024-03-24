export class GameSetting {
  numberOfQuestionPerGame: number;
  surahs: Array<number>;

  constructor(numberOfQuestionPerGame: number, surahs: Array<number>) {
    this.numberOfQuestionPerGame = numberOfQuestionPerGame;
    this.surahs = surahs;
  }

  getnumberOfQuestionPerGame(): number {
    return this.numberOfQuestionPerGame;
  }

  setnumberOfQuestionPerGame(numberOfQuestionPerGame: number): void {
    this.numberOfQuestionPerGame = numberOfQuestionPerGame;
  }

  getSurahs(): Array<number> {
    return this.surahs;
  }

  addSurah(surahToAdd: number): void {
    this.surahs.push(surahToAdd);
  }

  removeSurah(surahToRemove: number): void {
    const index: number = this.surahs.indexOf(surahToRemove);
    if (index > -1) {
      this.surahs.splice(index, 1);
    }
  }

  setSurahs(surahs: Array<number>): void {
    this.surahs = surahs;
  }
}
