import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import avatars from "../../data/avatars";

function GamificationFooter() {
    const tasks = useSelector((state) => state.tasks.tasks);
    const user = useSelector((state) => state.settings.profile);
    const [quote, setQuote] = useState("");

    const motivationalQuotes = [
        "Discipline is doing what needs to be done, even if you don't want to do it.",
        "Success is sum of small efforts, repeated day in and day out.",
        "Your focus determines your reality. Keep crushing those milestones!",
        "Discipline beats motivation every single time.",
        "Focus on the process, results will follow automatically."
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        setQuote(motivationalQuotes[randomIndex]);
    }, []);

    const totalXPCompleted = tasks
        .filter(task => task.complete)
        .reduce((acc, task) => acc + (Number(task.duration) * 10), 0);

    const xpPerLevel = 1000;
    const calculatedLevel = Math.floor(totalXPCompleted / xpPerLevel) + 1;
    const currentLevelXP = totalXPCompleted % xpPerLevel;
    const progressPercentage = Math.min((currentLevelXP / xpPerLevel) * 100, 100);

    const currentAvatar =
        avatars[user.avatar] || avatars.account;

    const AvatarIcon = currentAvatar.icon;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full p-4 items-stretch">

            <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-[#121824]/60 backdrop-blur-xl p-5 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)]">

                <div className="mb-2">
                    <h3 className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                        Gamification & Profile
                    </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 w-full h-full mt-2">

                    <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-slate-800/80 pb-3 sm:pb-0 sm:pr-6 justify-center sm:justify-start shrink-0">

                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-400/30 bg-linear-to-b from-purple-500/20 to-indigo-500/30 shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center justify-center shrink-0">
                            <AvatarIcon className="text-purple-200/80" sx={{ fontSize: 42 }} />
                        </div>

                        <div className="min-w-0 flex flex-col justify-center">
                            <h4 className="text-white font-bold text-base sm:text-lg tracking-wide whitespace-nowrap truncate max-w-35 sm:max-w-45">
                                {user.name}
                            </h4>
                            <span className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase whitespace-nowrap mt-0.5">
                                {user.scholar}
                            </span>
                        </div>
                    </div>

                    <div className="grow flex flex-col justify-center w-full sm:w-auto">
                        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold">
                            <span className="text-slate-400">Level Progress</span>
                            <span className="text-white tracking-wide">
                                Level <span className="text-cyan-400 font-bold">{calculatedLevel}</span>,{" "}
                                <span className="text-slate-400 font-normal">{currentLevelXP}/{xpPerLevel} XP</span>
                            </span>
                        </div>

                        <div className="w-full bg-slate-800/80 h-3 rounded-full overflow-hidden border border-white/5 p-px">
                            <div
                                className="bg-linear-to-r from-cyan-400 via-emerald-400 to-teal-500 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>

                        <div className="text-right mt-1.5">
                            <span className="text-[10px] text-emerald-400/80 font-bold tracking-wide">
                                +XP for On-Time Completion
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-2xl border border-transparent bg-[#121824]/60 backdrop-blur-xl p-5 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.15)] min-h-30 transition-all duration-300 group"
                style={{
                    background: "linear-gradient(#121824, #121824) padding-box, linear-gradient(135deg, rgba(34,211,238,0.3), rgba(168,85,247,0.4)) border-box",
                }}
            >
                <div className="absolute top-0 right-0 h-24 w-24 bg-purple-500/10 blur-2xl pointer-events-none"></div>

                <div className="relative z-10 text-center px-2">
                    <p className="text-slate-200 italic text-sm font-medium leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        "{quote}"
                    </p>
                </div>
            </div>

        </div>
    );
}

export default GamificationFooter;