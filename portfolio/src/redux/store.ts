import { configureStore } from "@reduxjs/toolkit";
import skillModalReducer from "@/redux/slices/skill-modal-slice";
import imageModalReducer from "@/redux/slices/image-modal-slice";

export const store = configureStore({
  reducer: {
    modal: skillModalReducer,
    imageModal: imageModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
