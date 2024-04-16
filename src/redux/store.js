import { configureStore } from '@reduxjs/toolkit'
import { featuresCardSlicer, loggedInSlicer } from './cardsSlice'
// import {featuresCardReducer, featuresCardSlicer} from './cardsSlice'
export const store = configureStore({
  reducer: {
    // featuresCard: featuresCardReducer,
    featuresCard : featuresCardSlicer.reducer,
    login : loggedInSlicer.reducer
  },
})

