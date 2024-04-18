import { createSlice } from '@reduxjs/toolkit';



export const featuresCardSlicer = createSlice({
  name: 'featuresCard',
  initialState: {
    value:  [],
  },
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

export const loggedInSlicer = createSlice({
  name: 'login',
  initialState: {
    loggedIn : false,
  },
  // reducers here to implement some functions
  reducers: {
    signIn: (state) => {
      state.loggedIn = true;
      console.log(state.loggedIn)
    },
    logout:(state)=>{
      state.loggedIn = false;
      console.log(state.loggedIn)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, reset ,removeItem } = featuresCardSlicer.actions;
export const { signIn , logout } = loggedInSlicer.actions;


// export {featuresCardSlicer,loggedInSlicer};