import { API_INTERNAL } from "@env";
import { GameSetting } from "../models/GameSetting";

const API_EXTERNAL = "https://api.alquran.cloud/v1";

export const FetchAllSurah = async () => {
  try {
    const response = await fetch(`${API_EXTERNAL}/` + "surah");
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};

export const FetchGameData = async (gameSettings: GameSetting) => {
  try {
    const response = await fetch(`${API_INTERNAL}/`+ 'gamedata', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberOfQuestionPerGame: gameSettings.getnumberOfQuestionPerGame(),
        surahs: gameSettings.getSurahs(),
      }),
    });
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};