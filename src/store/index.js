import { configureStore } from "@reduxjs/toolkit";

import testSlice, { testAction } from "./Reducer/test";
import test1Slice, { test1Action } from "./Reducer/test1";

export default configureStore({
  reducer: {
    test: testSlice,
    test1: test1Slice,
  },
});

export { testAction, test1Action };
