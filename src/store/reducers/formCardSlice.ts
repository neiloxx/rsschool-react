import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from 'types/types';

interface IFormCardState {
  cards: CardType[];
}

const initialState: IFormCardState = {
  cards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardType>) {
      state.cards.push(action.payload);
    },
  },
});

export default formCardsSlice.reducer;
