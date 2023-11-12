import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { userStateType } from "../../../utils/types/userSlices.types";

const initialState: userStateType = {
  user: null,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateuser: (state, action: PayloadAction<userStateType>) => {
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
  },
});

export const { updateuser } = userSlice.actions;

export default userSlice.reducer;
