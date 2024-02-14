import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "e52465886amsh8c5f506411e78aap1a949ajsn8f5abf05fd02",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

const defaultParams = {
  maxResults: 50,
};

export const fetchFromAPI = async (endpoint, customParams = {}) => {
  const params = { ...defaultParams, ...customParams };

  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers,
      params,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    throw error;
  }
};
