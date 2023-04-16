import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchBarState {
  query: string;
}

const initialState: ISearchBarState = {
  query: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBarSlice',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

const { actions, reducer } = searchBarSlice;

export const { setQuery } = actions;

export default reducer;
