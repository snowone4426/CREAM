import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "test",
};

const testSlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    test(state, action) {
      state.value = action.payload;
    },
  },
});

export const testAction = testSlice.actions;
export default testSlice.reducer;
