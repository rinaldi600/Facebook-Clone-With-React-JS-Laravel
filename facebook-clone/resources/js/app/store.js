import { configureStore } from '@reduxjs/toolkit'
import showNavbar from '../features/showNavbarSignUp';
import detailUser from '../getUser/getUserLogin';

export default configureStore({
  reducer: {
      showNavbarSlice : showNavbar,
      detailUserCurrent : detailUser,
  },
})
