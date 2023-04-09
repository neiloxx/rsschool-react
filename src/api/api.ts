import axios from 'axios';

const BASE_API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const response = await axios.get(`${BASE_API_URL}/character`);
  return response.data.results;
};
