import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petStateType } from "../../../utils/types/petSlice.types";

const initialState: petStateType = {
  pets: null,
  error: false,
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    updatePets: (state, action: PayloadAction<petStateType>) => {
      state.pets = action.payload.pets;
      state.error = action.payload.error;
    },
  },
});

export const { updatePets } = petSlice.actions;

export default petSlice.reducer;
