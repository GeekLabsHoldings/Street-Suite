import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const featuresCardSlicer = createSlice({
  name: 'featuresCard',
  initialState,
  reducers: {
    add: (state,imgUrl) => {
      state.value.push(imgUrl);
    },
    reset: (state) => {
    state.value =[]

    },
  },
})

// Action creators are generated for each case reducer function
export const { add, reset } = featuresCardSlicer.actions;

export default featuresCardSlicer.reducer;