import { configureStore } from '@reduxjs/toolkit'
import { NotificationAPI } from '../services/NotificationAPI';
import { DoctorAPI } from '../services/DoctorAPI';
import { PatientsAPI } from "../services/PatientsAPI"

export default configureStore({
  reducer: {
    [NotificationAPI.reducerPath]: NotificationAPI.reducer,
    [DoctorAPI.reducerPath]:DoctorAPI.reducer,
    [PatientsAPI.reducerPath]:PatientsAPI.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      NotificationAPI.middleware,
      DoctorAPI.middleware,
      PatientsAPI.middleware,
    ),
    
})