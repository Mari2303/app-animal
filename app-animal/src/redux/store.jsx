import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './animalComponente';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export default store;
