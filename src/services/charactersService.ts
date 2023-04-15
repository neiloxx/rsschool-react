import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterCardType } from 'types/types';

const BASE_API_URL = 'https://rickandmortyapi.com/api';

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_URL}` }),
  endpoints: (build) => ({
    fetchCharacters: build.query<CharacterCardType[], string>({
      query: (searchQuery) => ({
        url: `/character`,
        params: {
          name: searchQuery,
        },
      }),
      transformResponse: (response: { results: CharacterCardType[] }) => response.results,
    }),
  }),
});
