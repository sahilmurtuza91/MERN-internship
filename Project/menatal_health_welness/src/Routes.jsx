import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthContainer from './Layout/AuthContainer'
import LoginPage from './pages/Auth/LoginPage'
import ForgotPassword from './pages/Auth/ForgotPassword'
import VerifyOtp from './pages/Auth/Verify-otp'
import ResetPassword from './pages/Auth/ResetPassword'
import MainContainer from './Layout/MainContainer'
import Dashboard from './pages/dashboard/Dashboard'
import ChangePassword from './pages/Auth/ChangePassword'
import Profile from "./pages/Profile/Profile"
import Notification from './pages/notification/Notification'
import ManageSpecialists from "./pages/UserManagement/ManageSpecialists/ManageSpecialists"
import AddSpecialist from './pages/UserManagement/ManageSpecialists/AddSpecialist'
import ManagePatients from "./pages/UserManagement/ManagePatients/ManagePatients"
import AddNewPatients from "./pages/UserManagement/ManagePatients/AddNewPatients"
import Index from "./pages/UserManagement/ManageSubAdmins/Index"
import FamilySupportMembers from "./pages/UserManagement/FamilySupportMembers/FamilySupportMembers"
import Sessions from './pages/Sessions & Treatment Plans/Sessions/Sessions'
import TherapySessions from "./pages/Sessions & Treatment Plans/Therapy Sessions/TherapySessions"
import TreatmentPlans from './pages/Sessions & Treatment Plans/Treatment Plans/TreatmentPlans'
import AI_TreatmentPlans from './pages/Sessions & Treatment Plans/Al Treatment Plans/AI_TreatmentPlans'
import MonitorProgress from "./pages/Sessions & Treatment Plans/Monitors Patient Progress/MonitorProgress"

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <AuthContainer />,
        children: [
          {
            index: true,
            element: <LoginPage />
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />
          },
          {
            path: "/verify-otp",
            element: <VerifyOtp />
          },
          {
            path: "/reset-password",
            element: <ResetPassword />
          },
          {
            path:"/change-password",
            element:<ChangePassword />
          }
        ],
      },
      {
        element: <MainContainer />,
        children:[
          {
            index:true,
            path:"dashboard",
            element:<Dashboard />
          },
          {
            path:"/Profile",
            element:<Profile />
          },
          {
            path:"/notifications",
            element:<Notification />
          },
          {
            path:"/user-management/specialists",
            element:<ManageSpecialists />
          },
          {
            path:"/user-management/specialists/add",
            element:<AddSpecialist />
          },
          {
            path:"/user-management/patients",
            element:<ManagePatients />
          },
          {
            path:"/user-management/patients/add",
            element:<AddNewPatients />
          },
          {
            path:"/user-management/sub-admins",
            element:<Index />
          },
          {
            path:"/user-management/family-support",
            element:<FamilySupportMembers />
          },
          {
            path:"/sessions-management/sessions",
            element:<Sessions />
          },
          {
            path:"/sessions-management/therapy-sessions",
            element:<TherapySessions />
          },
          {
            path:"/sessions-management/treatment-plans",
            element:<TreatmentPlans />
          },
          {
            path:"/sessions-management/ai-treatment-plans",
            element:<AI_TreatmentPlans />
          },
          {
            path:"/sessions-management/moniter-patient-progress",
            element:<MonitorProgress />
          }
        ]
      }
    ]


  }
])
export default router;