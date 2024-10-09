import { configureStore } from "@reduxjs/toolkit";
import skillModalReducer from "@/redux/slices/skill-modal-slice";

export const store = configureStore({
  reducer: {
    modal: skillModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
