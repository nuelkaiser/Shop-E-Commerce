import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

// Create the slice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

// Export the action creator
export const { setModal } = modalSlice.actions;


// Export the reducer
export default modalSlice.reducer;
