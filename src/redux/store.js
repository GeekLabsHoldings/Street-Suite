import { configureStore } from '@reduxjs/toolkit'
import featuresCardReducer from './cardsSlice'
export const store = configureStore({
  reducer: {
    featuresCard: featuresCardReducer,
  },
})

