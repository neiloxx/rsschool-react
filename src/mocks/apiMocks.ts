import { CharactersApiSuccess } from 'services/charactersService';
import { CharacterCardType } from 'types/types';

export const responseMock: CharactersApiSuccess<CharacterCardType> = {
  info: { count: 0, next: '', page: 0, prev: '' },
  results: [
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/28'],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z',
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/15',
      created: '2017-11-04T20:56:13.215Z',
    },
  ],
};

export const errorResponseMock = {
  error: 'Nothing found',
};
