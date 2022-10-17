import { configureStore } from '@reduxjs/toolkit'
import showNavbar from '../features/showNavbarSignUp';
import detailUser from '../getUser/getUserLogin';
import statusBoxModal from '../features/showStatusBox';
import getStatusUser from '../features/getStatusUser';
import validationUser from '../features/validationStatusUser';

export default configureStore({
  reducer: {
      showNavbarSlice : showNavbar,
      detailUserCurrent : detailUser,
      showStatus : statusBoxModal,
      getStatus : getStatusUser,
      validation : validationUser
  },
})
