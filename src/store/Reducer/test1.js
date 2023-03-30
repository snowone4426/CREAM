import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "test1",
};

const test1Slice = createSlice({
  name: "b",
  initialState: initialState,
  reducers: {
    test(state, action) {
      state.value = action.payload;
    },
  },
});

export const test1Action = test1Slice.actions;
export default test1Slice.reducer;
