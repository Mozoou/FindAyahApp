import { AyahInteface } from "../interfaces/AyahInterface";

export class GameQuestion
{
    ayah: AyahInteface
    goodAyah: AyahInteface
    wrongAyahs: Array<AyahInteface>
    questionNumber: number;

    constructor(ayahToFind: AyahInteface, goodAyah: AyahInteface, wrongAyahs: Array<AyahInteface>, questionNumber: number)
    {
        this.ayah = ayahToFind
        this.goodAyah = goodAyah
        this.wrongAyahs = wrongAyahs
        this.questionNumber = questionNumber
    }
}