import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const featuresCardSlicer = createSlice({
  name: 'featuresCard',
  initialState,
  // reducers here to implement some functions
  reducers: {
    add: (state,cardsData) => {
      state.value.push(cardsData.payload);
    },

    removeItem: (state,cardData) => {
      const items = state.value.filter((ele) => ele.id  !== (cardData.payload).id);
      state.value = items;
    },

    reset: (state) => {
    state.value = []
    },

  },
})

// Action creators are generated for each case reducer function
export const { add, reset,removeItem } = featuresCardSlicer.actions;

export default featuresCardSlicer.reducer;