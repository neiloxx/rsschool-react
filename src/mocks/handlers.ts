import { errorResponseMock, responseMock } from 'mocks/apiMocks';
import { rest } from 'msw';
import { CharactersApiError, CharactersApiSuccess } from 'services/charactersService';
import { CharacterCardType } from 'types/types';

const BASE_API_URL = 'https://rickandmortyapi.com/api';
const apiResponses = {
  success: 200,
  notFound: 404,
};

export const handlerGetCharacters = [
  rest.get(`${BASE_API_URL}/character`, (req, res, ctx) => {
    return res(
      ctx.status(apiResponses.success),
      ctx.json<CharactersApiSuccess<CharacterCardType>>(responseMock)
    );
  }),
];

export const handlerError = [
  rest.get(`${BASE_API_URL}/character`, (req, res, ctx) => {
    return res(ctx.status(apiResponses.notFound), ctx.json<CharactersApiError>(errorResponseMock));
  }),
];

export const handlerGetCharacterById = [
  rest.get(`${BASE_API_URL}/character/8`, (req, res, ctx) => {
    return res(
      ctx.status(apiResponses.success),
      ctx.json<CharacterCardType>(responseMock.results[0])
    );
  }),
];

export default [...handlerGetCharacters, ...handlerError, ...handlerGetCharacterById];
