import { configureStore } from '@reduxjs/toolkit'

import homeSclice from './homeSclice'

export const store = configureStore({
  reducer: {
    home : homeSclice,

  },
})