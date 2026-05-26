import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { getTaskStatus } from "../../utils/taskStatus";
import { Timer, WarningCircle, Gauge, Fire } from "phosphor-react";
import { motion } from "framer-motion";


function StatsCards() {
    const tasks = useSelector((state) => state.tasks.tasks);

    // focous card
    const todayMinutes = tasks
        .filter(task => task.complete && moment(task.time).isSame(moment(), "day"))
        .reduce((acc, task) => acc + task.duration, 0);

    const totalTime = tasks
        .filter(task => moment(task.time).isSame(moment(), "day"))
        .reduce((acc, task) => acc + task.duration, 0);

    // Task Remainig 
    const pendingTask = tasks.filter((task) => !task.complete)
    const taskRemaing = pendingTask.length

    // Efficiency rate
    const compeletTask = tasks.filter(task => task.complete)
    const onTimeTasks = compeletTask.filter(task => {
        const status = getTaskStatus(task);
        return status.delay === 0;
    });
    const EfficiencyRate = compeletTask.length > 0 ? Math.round(
        (onTimeTasks.length / compeletTask.length) * 100
    )
        : 0;

    const percentage = Math.min(Math.round((todayMinutes / totalTime) * 100), 100);

    const studyStreak = 14;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4 bg-slate-950 rounded-xl opacity-90">

            {/* CARD 1: Today's Focus (Cyan Theme) */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }} className="bg-[#121824]/60 backdrop-blur-xl border border-cyan-500/30 p-5 rounded-2xl flex justify-between items-center transition-all duration-300 shadow-[inset_0_0_30px_rgba(34,211,238,0.45)] hover:border-cyan-400">
                <div className="flex flex-col justify-between h-full  w-full">
                    <div className="flex items-center justify-between w-full  gap-2 mb-2">
                        <span className="text-white font-medium text-lg">Today's Focus</span>
                        {/* <TimerIcon className="text-cyan-400 text-sm" sx={{ fontSize: 30 }} /> */}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                            {todayMinutes} <span className="text-sm font-normal text-slate-400">/ {totalTime} min</span>
                        </h2>
                    </div>
                </div>
                {/* Circular Progress Ring */}
                <div className="flex flex-col items-center justify-center gap-2 ">

                    {/* ICON */}
                    <Timer size={30} className="text-cyan-400" />

                    {/* CIRCLE */}
                    <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{
                            background: `conic-gradient(#22d3ee ${percentage * 3.6}deg, rgba(255,255,255,0.1) ${percentage * 3.6}deg)`
                        }}
                    >
                        <div className="absolute w-[80%] h-[80%] bg-[#121824] rounded-full"></div>
                    </div>

                </div>
            </motion.div>

            {/* CARD 2: Tasks Remaining (Yellow Theme) */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }} className="bg-[#121824]/60 backdrop-blur-xl border border-yellow-500/30 p-5 rounded-2xl shadow-[inset_0_0_30px_rgba(250,204,21,0.40)] flex justify-between items-center transition-all duration-300 hover:border-yellow-400">
                <div className="flex flex-col justify-between h-full  w-full">
                    <div className="flex items-center justify-between w-full gap-2 mb-2">
                        <span className="text-white font-medium text-lg">Tasks Remaining</span>
                        <WarningCircle size={30} className="text-yellow-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-400 tracking-tight drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                            {taskRemaing} <span className="text-sm font-normal text-slate-400">Tasks Left</span>
                        </h2>
                    </div>
                </div>
            </motion.div>

            {/* CARD 3: Efficiency Rate (Green Theme) */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }} className="bg-[#121824]/60 backdrop-blur-xl border border-emerald-500/30 p-5 rounded-2xl shadow-[inset_0_0_30px_rgba(52,211,153,0.40)] flex justify-between items-center transition-all duration-300 hover:border-emerald-400">
                <div className="flex flex-col justify-between h-full  w-full">
                    <div className="flex items-center justify-between w-full gap-2 mb-2">
                        <span className="text-white font-medium text-lg">Efficiency Rate</span>
                        <Gauge size={30} className="text-emerald-400" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                            {EfficiencyRate}% <span className="text-sm font-normal text-slate-400">On-Time</span>
                        </h2>
                    </div>
                </div>
            </motion.div>

            {/* CARD 4: Study Streak (Purple/Orange Theme) */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }} className="bg-[#121824]/60 backdrop-blur-xl border border-purple-500/30 p-5 rounded-2xl shadow-[inset_0_0_30px_rgba(168,85,247,0.40)] flex flex-col justify-between transition-all duration-300 hover:border-purple-400">
                <div className="flex justify-between items-center  h-full w-full mb-1">
                    <div className="flex items-center justify-between w-full gap-2">
                        <span className="text-white font-medium text-lg">Study Streak</span>
                        <Fire size={30} className="text-orange-500" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-orange-400 tracking-tight drop-shadow-[0_0_10px_rgba(251,146,60,0.3)] mb-2">
                        {studyStreak} <span className="text-sm font-normal text-slate-400">Days</span>
                    </h2>
                    {/* Dots indicator row from image */}
                    <div className="flex gap-1.5 items-center">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i < 6
                                    ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]'
                                    : 'bg-slate-700'
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default StatsCards