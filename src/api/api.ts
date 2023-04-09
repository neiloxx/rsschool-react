import axios from 'axios';

const BASE_API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (query: string) => {
  const response = await axios.get(`${BASE_API_URL}/character/?name=${query}`);
  return response.data.results;
};

export const getCharacter = async (id: string) => {
  const response = await axios.get(`${BASE_API_URL}/character/${id}`);
  return response.data;
};
