import React from 'react'
import StatsCards from '../components/dashboard/StatsCards'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpNextCard from '../components/dashboard/UpNextCard';
import WeeklyChart from '../components/dashboard/WeeklyChart';
import CategoryPieChart from '../components/dashboard/CategoryPieChart'
import GamificationFooter from '../components/dashboard/GamificationFooter';

function Dashboard() {
  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-10 pt-6 pb-10 overflow-x-hidden"
      style={{ backgroundImage: `url("/Images/backgroundImg.jpg")` }}
    >

      <div className="relative w-full max-w-7xl mx-auto h-16 mb-2 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden flex items-center justify-between pr-2">
        

        <div className="absolute inset-0 pointer-events-none flex justify-between opacity-40 blur-xl">
          <div className="w-1/4 h-full bg-linear-to-r from-cyan-500 to-transparent"></div>
          <div className="w-1/3 h-full bg-linear-to-r from-emerald-500 to-purple-500 mx-auto"></div>
          <div className="w-1/4 h-full bg-linear-to-l from-purple-600 to-transparent"></div>
        </div>

       
        <div className="w-8 z-10"></div>

        <div className="z-10 flex items-center justify-center">
          <h1 className="text-white font-bold text-2xl tracking-wider font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Atheni<span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">fy</span>
          </h1>
        </div>

        <div className="z-10 flex items-center text-slate-400 hover:text-white cursor-pointer transition duration-200">
          <AccountCircleIcon sx={{ fontSize: 32 }} />
        </div>

      </div>
      <p className=' text-white text-2xl font-bold pl-2'>Dashboard</p>
      <div className="max-w-7xl mx-auto">
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 px-4">
          <UpNextCard />
          <WeeklyChart />
          <CategoryPieChart />
        </div>
        <GamificationFooter />
      </div>

    </div>
  );
}

export default Dashboard;