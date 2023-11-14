import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { chatStateType } from "../../../utils/types/chatSlice.types";

const initialState: chatStateType = {
  list: null,
  chats: null,
  error: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    initialMsgs: (state, action: PayloadAction<chatStateType>) => {
      state.chats = action.payload.chats;
      state.list = action.payload.list;
      state.error = action.payload.error;
    },
    newMsgs: (state, action: PayloadAction<chatStateType>) => {},
  },
});

export const { initialMsgs, newMsgs } = chatSlice.actions;

export default chatSlice.reducer;
