import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  offset: 0,
  filteredPokemons: [],
  filter: {
    sortBy: "",
    generation: "",
  },
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons(state, action: PayloadAction<[]>) {
      state.pokemons = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.filter.sortBy = action.payload;
    },
    setGeneration(state, action: PayloadAction<string>) {
      state.filter.generation = action.payload;
    },
    setFilteredPokemons(state, action: PayloadAction<[]>) {
      state.filteredPokemons = action.payload;
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
  },
});

export const {
  addPokemons,
  setSortBy,
  setGeneration,
  setFilteredPokemons,
  setOffset,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
