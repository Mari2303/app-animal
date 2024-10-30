import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCats } from '../services/catService';
import { fetchDogs } from '../services/dogService';

export const loadAnimals = createAsyncThunk('animals/loadAnimals', async () => {
  const cats = await fetchCats();
  const dogs = await fetchDogs();
  return { cats, dogs };
});

const animalsSlice = createSlice({
  name: 'animal',
  initialState: { cats: [], dogs: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAnimals.pending, (state) => {
        state.status = 'cargando';
      })
      .addCase(loadAnimals.fulfilled, (state, action) => {
        state.cats = action.payload.cats;
        state.dogs = action.payload.dogs;
        state.status = 'exitoso';
      })
      .addCase(loadAnimals.rejected, (state) => {
        state.status = 'fallo';
      });
  },
});

export default animalsSlice.reducer;
