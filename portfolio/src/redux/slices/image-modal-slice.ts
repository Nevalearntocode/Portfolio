import { ImageModalState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
  name: "",
  image: "",
} as ImageModalState;

const imageModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: { payload: Omit<ImageModalState, "isOpen"> }) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = "";
      state.name = "";
      state.image = "";
    },
  },
});

export const { openModal, closeModal } = imageModalSlice.actions;
export default imageModalSlice.reducer;
