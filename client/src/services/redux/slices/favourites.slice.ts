import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petStateType } from "../../../utils/types/petSlice.types";

const initialState: petStateType = {
  pets: null,
  error: false,
};

const favoritePetsSlice = createSlice({
  name: "favoritePets",
  initialState,
  reducers: {
    updateFavoritePets: (state, action: PayloadAction<petStateType>) => {
      state.pets = action.payload.pets;
      state.error = action.payload.error;
    },
  },
});

export const { updateFavoritePets } = favoritePetsSlice.actions;

export default favoritePetsSlice.reducer;
