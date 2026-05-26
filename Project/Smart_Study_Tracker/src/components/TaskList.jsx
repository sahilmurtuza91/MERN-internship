import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { toggleTask, deletTask } from "../redux/taskSlice";
import { getTaskStatus } from "../utils/taskStatus";
import { cancelNotification } from "../utils/scheduleNotification";

function TaskList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const TaskData = useSelector((state) => state.tasks.tasks);

  const [now, setNow] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (cat) => {
    const map = {
      "Coding": "text-cyan-400 border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_8px_rgba(34,211,238,0.15)]",
      "Revision": "text-purple-400 border-purple-400/30 bg-purple-500/10 shadow-[0_0_8px_rgba(168,85,247,0.15)]",
      "Exam Preparation": "text-amber-400 border-amber-400/30 bg-amber-500/10 shadow-[0_0_8px_rgba(245,158,11,0.15)]",
      "Lecture": "text-emerald-400 border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_8px_rgba(52,211,153,0.15)]",
      "Assignment": "text-pink-400 border-pink-400/30 bg-pink-500/10 shadow-[0_0_8px_rgba(236,72,153,0.15)]",
      "Break": "text-rose-400 border-rose-400/30 bg-rose-500/10 shadow-[0_0_8px_rgba(244,63,94,0.15)]",
      "Self Study": "text-indigo-400 border-indigo-400/30 bg-indigo-500/10 shadow-[0_0_8px_rgba(99,102,241,0.15)]",
    };
    return map[cat] || "text-slate-400 border-slate-700 bg-slate-800/40";
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 py-8 overflow-y-auto"
      style={{ backgroundImage: `url("/Images/backgroundImg.jpg")` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2">
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer active:scale-95 p-1 flex items-center justify-center rounded-lg hover:bg-white/5"
            >
              <ArrowBackIcon sx={{ fontSize: 22 }} />
            </button>
            <div>
              <h1 className="text-white font-extrabold text-3xl tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] m-0">
                Your Study Tasks
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">
                Keep track of what you need to study and finish today.
              </p>
            </div>
          </div>
          {TaskData.length > 0 && (
            <button
              onClick={() => navigate("/app/add-task")}
              className="group flex items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-cyan-400 via-sky-400 to-purple-500 py-2.5 px-4 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,211,238,0.45)] cursor-pointer shadow-lg"
            >
              <AddIcon sx={{ fontSize: 18 }} /> Add Task
            </button>
          )}
        </div>

        {TaskData.length === 0 ? (
          <div className="w-full max-w-xl mx-auto mt-16 relative overflow-hidden rounded-3xl p-[1.5px] bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_45px_rgba(34,211,238,0.25)] h-80">
            <div className="absolute top-0 left-0 h-32 w-32 bg-cyan-400/20 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 h-32 w-32 bg-purple-500/10 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 w-full h-full rounded-3xl bg-[#071120]/85 backdrop-blur-md p-8 flex flex-col justify-between items-center text-center">
              <div className="mt-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <AssignmentIcon sx={{ fontSize: 26 }} />
                </div>
                <h2 className="text-white text-2xl font-extrabold tracking-tight">
                  No Tasks Found
                </h2>
                <p className="text-slate-400 mt-2 text-sm max-w-sm leading-relaxed">
                  Your list is empty right now. Add a task to stay organized and start focusing.
                </p>
              </div>
              <button
                onClick={() => navigate("/app/add-task")}
                className="group w-full max-w-xs flex items-center justify-center gap-1 rounded-2xl bg-linear-to-r from-cyan-400 via-sky-400 to-purple-500 py-3 text-base font-bold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-pointer"
              >
                <AddIcon className="font-bold" /> Add Your First Task
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
            {TaskData.map((task) => {
              const status = getTaskStatus(task, now);

              let statusColor = "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]";
              if (status.type === "late") {
                statusColor = "text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.25)]";
              } else if (status.type === "Completed") {
                statusColor = "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.25)]";
              }

              const completionDiff = task.complete && task.completedAt && task.scheduledTime
                ? moment(task.completedAt).diff(moment(task.scheduledTime), "minutes")
                : 0;

              return (
                <div
                  key={task.id}
                  className="relative overflow-visible rounded-2xl border border-transparent min-h-48.75 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: task.complete
                      ? "linear-gradient(#071120dd, #071120dd) padding-box, linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1)) border-box"
                      : "linear-gradient(#071120dd, #071120dd) padding-box, linear-gradient(135deg, rgba(34,211,238,0.35), rgba(168, 85, 247, 0.25)) border-box",
                    backdropBlur: "12px",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: task.complete
                      ? "0 0 25px rgba(16, 185, 129, 0.15)"
                      : "0 0 25px rgba(34, 211, 238, 0.12)"
                  }}
                >
                  <div className={`absolute top-0 right-0 w-28 h-28 blur-3xl pointer-events-none opacity-15 rounded-full ${task.complete ? 'bg-emerald-400' : 'bg-cyan-400'}`}></div>

                  <div className="p-5 flex justify-between items-stretch h-full w-full gap-4 relative z-10">
                    <div className="flex gap-3 items-start flex-1 min-w-0">
                      <Checkbox
                        checked={task.complete}
                        onChange={() => dispatch(toggleTask(task.id))}
                        sx={{
                          color: "rgba(255,255,255,0.2)",
                          padding: "2px",
                          '&.Mui-checked': { color: "#34d399" },
                        }}
                      />

                      <div className="flex flex-col flex-1 min-w-0">
                        <h2 className={`font-extrabold text-lg tracking-tight truncate leading-tight ${task.complete ? "line-through text-slate-500 font-bold" : "text-white"}`}>
                          {task.title}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border tracking-wider uppercase ${getCategoryColor(task.category)}`}>
                            {task.category || "General"}
                          </span>
                          <span className="text-slate-500 text-xs font-semibold flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                            ⏱️ {task.duration} mins
                          </span>
                        </div>

                        <div className="mt-3.5 space-y-1 text-xs text-slate-400 font-medium">
                          <p className="flex items-center gap-1 text-[11px]">
                            <span className="text-slate-500">Scheduled:</span>
                            <span className="text-slate-300 font-semibold">{moment(task.scheduledTime).format('MMM DD, hh:mm A')}</span>
                          </p>

                          {task.complete && task.completedAt && (
                            <p className={`text-[11px] font-bold mt-1 ${completionDiff <= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                              {completionDiff <= 0 
                                ? `✨ Completed on time! (${Math.abs(completionDiff)} mins early)`
                                : `⚠️ Completed with ${completionDiff} mins delay`
                              }
                            </p>
                          )}
                        </div>

                        <div className="mt-auto pt-3 border-t border-slate-800/60 w-full">
                          <p className={`text-xs font-black tracking-widest uppercase ${statusColor}`}>
                            {status.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center shrink-0 min-w-17.5">
                      {!task.complete && (
                        <button
                          onClick={() => navigate("/app/edit-task", { state: { editTask: task } })}
                          className="w-full flex items-center justify-center gap-1 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/50 text-cyan-400 font-bold text-xs py-2 px-2.5 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
                        >
                          <EditIcon sx={{ fontSize: 13 }} /> Edit
                        </button>
                      )}
                      <button
                        onClick={() => {
                          cancelNotification(task.id);
                          dispatch(deletTask(task.id));
                        }}
                        className="w-full flex items-center justify-center gap-1 rounded-xl bg-rose-500/10 hover:bg-rose-600 border border-rose-500/20 hover:border-transparent text-rose-400 hover:text-white font-bold text-xs py-2 px-2.5 transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                      >
                        <DeleteIcon sx={{ fontSize: 13 }} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;