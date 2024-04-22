import { AyahInteface } from "../interfaces/AyahInterface";
import { shuffle } from "../utils/Functions";

export class GameQuestion {
    verseToFind: AyahInteface
    goodVerseAnswer: AyahInteface
    badVersesAnswer: Array<AyahInteface>

    constructor(verseToFind: AyahInteface, goodVerseAnswer: AyahInteface, badVersesAnswer: Array<AyahInteface>) {
        this.verseToFind = verseToFind
        this.goodVerseAnswer = goodVerseAnswer
        this.badVersesAnswer = badVersesAnswer
    }

    getQuestionChoices(): Array<any> {
        let choices = [
            {
                id: this.goodVerseAnswer.number,
                label: this.goodVerseAnswer.text,
                value: this.goodVerseAnswer.numberInSurah,
                layout: 'col'
            }
        ];
        this.badVersesAnswer.forEach(verse => {
            const wrongAyah = {
                id: verse.number,
                label: verse.text,
                value: verse.numberInSurah,
                layout: 'col'
            }
            choices.push(wrongAyah)
        });

        return shuffle(choices);
    }
}