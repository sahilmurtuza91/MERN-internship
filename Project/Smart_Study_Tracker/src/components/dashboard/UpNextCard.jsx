import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function UpNextCard() {

    const tasks = useSelector((state) => state.tasks.tasks);
    const navigate = useNavigate();

    const now = Date.now();

    const upcomingTasks = tasks
        .filter(
            (task) =>
                new Date(task.scheduledTime).getTime() > now &&
                !task.complete
        )
        .sort(
            (a, b) =>
                new Date(a.scheduledTime).getTime() -
                new Date(b.scheduledTime).getTime()
        );

    const nextTask = upcomingTasks[0];


    const heading = nextTask ? "Next Up Focus" : "No Upcoming Task";

    const title = nextTask ? nextTask.title : "You're All Caught Up ✨";

    const subtitle = nextTask ? `[${moment(nextTask.scheduledTime).format("hh:mm A")} - ${moment(nextTask.scheduledTime).add(nextTask.duration, "minutes").format("hh:mm A")}]` : "Add a new task to start your next focus session.";

    const buttonText = nextTask ? "Start Focus Timer" : "Add New Task";

    const handleClick = () => {
        if (nextTask) {
            navigate("/app/timer", {
                state: {
                    selectedTask: nextTask,
                },
            });
        } else {
            navigate("/app/add-task");
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }} className="relative rounded-3xl p-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_50px_rgba(59,130,246,0.35)] w-full h-80 overflow-hidden">


            <div className="absolute top-0 left-0 h-32 w-32 bg-cyan-400/50 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 h-32 w-32 bg-purple-500/50 blur-3xl pointer-events-none"></div>


            <div className="relative z-10 w-full h-full rounded-3xl bg-[#071120] p-6 flex flex-col justify-around">


                <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        {heading}
                    </h3>
                </div>


                <div>
                    <h2 className="text-3xl font-extrabold leading-tight text-white line-clamp-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                        {title}
                    </h2>

                    <p className="mt-2 text-lg text-slate-400 font-medium">
                        {subtitle}
                    </p>
                </div>


                <button
                    onClick={handleClick}
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-purple-500 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                >
                    {buttonText}
                </button>

            </div>
        </motion.div>
    );
}

export default UpNextCard;