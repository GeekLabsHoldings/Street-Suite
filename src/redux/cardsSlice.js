import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}


export const featuresCardSlicer = createSlice({
  name: 'featuresCard',
  initialState,
  reducers: {
    add: (state,cardsData) => {
      state.value.push(cardsData.payload);
    },
    removeItem: (state,cardData)=>{

      // console.log(cardData.payload);
      state.value.filter((ele)=> ele !== cardData.payload);
    },
    reset: (state) => {
    state.value = []

    },
  },
})

// Action creators are generated for each case reducer function
export const { add, reset,removeItem } = featuresCardSlicer.actions;

export default featuresCardSlicer.reducer;