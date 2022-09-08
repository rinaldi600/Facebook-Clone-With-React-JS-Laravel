import { configureStore } from '@reduxjs/toolkit'
import showNavbar from '../features/showNavbarSignUp';

export default configureStore({
  reducer: {
      showNavbarSlice : showNavbar
  },
})
