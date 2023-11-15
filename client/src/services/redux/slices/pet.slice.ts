import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petStateType } from "../../../utils/types/petSlice.types";
import { PetType } from "../../../utils/types";

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
    addPets: (state, action: PayloadAction<{ pet: PetType }>) => {
      if (state.pets) state.pets?.push(action.payload.pet);
      else {
        state.pets = [action.payload.pet];
      }
    },
  },
});

export const { updatePets, addPets } = petSlice.actions;

export default petSlice.reducer;
