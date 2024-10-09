import { ModalState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: null,
} as ModalState;

const skillModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: { payload: ModalState["type"] }) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = skillModalSlice.actions;
export default skillModalSlice.reducer;
