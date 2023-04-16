import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { charactersAPI } from 'services/charactersService';
import searchBarSlice from 'store/reducers/searchBarSlice';
import formCardReducer from 'store/reducers/formCardSlice';

const rootReducer = combineReducers({
  formCardReducer,
  searchBarSlice,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
