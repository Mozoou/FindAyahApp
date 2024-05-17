import { API_INTERNAL } from "@env";
import { GameSetting } from "../models/GameSetting";
import { plainToInstance } from "class-transformer";
import { GameQuestion } from "../models/GameQuestion";

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
    const response = await fetch(`${API_INTERNAL}/`+ 'fetch_game_questions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberOfQuestionsPerGame: gameSettings.getnumberOfQuestionPerGame(),
        chapterNumbers: gameSettings.getSurahs(),
      }),
    });
    const json = await response.json();
    return plainToInstance(GameQuestion, json)
  } catch (error) {
    console.error(error);
  }
};

export const Login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_INTERNAL}/` + 'login_check', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password
      }),
    });

    const json = await response.json();

    return json.token;
  } catch (error) {
    console.error(error)
  }
}