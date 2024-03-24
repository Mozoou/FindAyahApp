// const API_URL = 'https://api.example.com';
const API_EXTERNAL = 'https://api.alquran.cloud/v1'

export const FetchAllSurah = async () => {
  try {
    const response = await fetch(`${API_EXTERNAL}/`+ 'surah');
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};