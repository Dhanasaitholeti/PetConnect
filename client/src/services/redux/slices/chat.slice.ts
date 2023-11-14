import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  chatStateType,
  messageType,
} from "../../../utils/types/chatSlice.types";

interface newMgstype {
  message: messageType;
}

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

    newMsgs: (state, action: PayloadAction<newMgstype>) => {
      const msg = action.payload.message;
      if (!state.chats) {
        state.chats = {};
      }
      if (!state.chats[msg.chatId]) {
        state.chats[msg.chatId] = [];
      }
      state.chats[msg.chatId].push(msg);
    },
  },
});

export const { initialMsgs, newMsgs } = chatSlice.actions;

export default chatSlice.reducer;
