import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/user.slice";
import PetReducer from "./slices/pet.slice";
import ChatReducer from "./slices/chat.slice";
import FavouritesReducer from "./slices/favourites.slice";

import { userStateType } from "../../utils/types/userSlices.types";
import { petStateType } from "../../utils/types/petSlice.types";
import { chatStateType } from "../../utils/types/chatSlice.types";

export const store = configureStore({
  reducer: {
    PetReducer,
    UserReducer,
    ChatReducer,
    FavouritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = {
  UserReducer: userStateType;
  PetReducer: petStateType;
  ChatReducer: chatStateType;
  FavouritesReducer: petStateType;
};
