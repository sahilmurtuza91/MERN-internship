import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import moment from "moment";
import { useSelector } from "react-redux";

function WeeklyChart() {
    const tasks = useSelector((state) => state.tasks.tasks);
    // console.log(tasks);
    // console.log(tasks[5].category);
    // console.log(tasks.length)


    // Custom  Tooltip
    function CustomTooltip({ active, payload }) {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-[#121824]/90 border border-slate-700 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-white">
                    <h3 className="font-bold text-sm text-slate-300 mb-1">
                        {moment().day(data.title).format("dddd")}
                    </h3>
                    <p className="text-cyan-400 font-bold text-base">
                        Study Duration: {data.duration} mins
                    </p>
                    <div className="mt-2 border-t border-slate-800 pt-2">
                        <p className="text-xs text-slate-400 font-semibold mb-1">Categories Explored:</p>
                        {data.categories.length > 0 ? (
                            <div className="flex flex-wrap gap-1 mt-1">
                                {data.categories.map((cat, index) => (
                                    <span key={index} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-slate-300">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-slate-500 italic">No tasks logged</p>
                        )}
                    </div>
                </div>
            );
        }
        return null;
    }
    const uniqueCategories = [];
    const weeklyData = [
        { title: "Mon", duration: 0, categories: [] },
        { title: "Tue", duration: 0, categories: [] },
        { title: "Wed", duration: 0, categories: [] },
        { title: "Thu", duration: 0, categories: [] },
        { title: "Fri", duration: 0, categories: [] },
        { title: "Sat", duration: 0, categories: [] },
        { title: "Sun", duration: 0, categories: [] },
    ];

    tasks.forEach((task) => {
        if (task.complete) {
            let dayIndex = moment(task.scheduledTime).day() - 1;
            if (dayIndex === -1) dayIndex = 6;

            weeklyData[dayIndex].duration += Number(task.duration);
            if (!weeklyData[dayIndex].categories.includes(task.category)) {
                weeklyData[dayIndex].categories.push(task.category);
            }

            if (task.category && !uniqueCategories.includes(task.category)) {
                uniqueCategories.push(task.category);
            }
        }
    });

    const color = ["bg-cyan-400", "bg-emerald-400", "bg-amber-500", "bg-purple-500", "bg-pink-500", "bg-blue-400", "bg-green-400"];

    return (
        <div className="w-full h-80 bg-[#121824]/60 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-white font-bold text-lg tracking-wide">
                    Weekly Study Volume
                </h2>
                <div className="flex gap-3 text-xs font-medium ">

                    <div className="flex gap-3 text-xs font-medium flex-wrap ">
                        {uniqueCategories.map((cat, index) => (
                            <span
                                key={index}
                                className="flex items-center gap-1.5 text-slate-300"
                            >
                                <span
                                    className={`w-2.5 h-2.5 rounded-sm ${color[index % color.length]}`}
                                ></span>

                                <span>{cat}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-60 mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={weeklyData}
                        margin={{ top: 20, right: 10, left: -25, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="neonGlow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#34d399" stopOpacity={0.5} />
                                <stop offset="50%" stopColor="#22d3ee" stopOpacity={0.2} />
                                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={true} horizontal={true} />

                        <XAxis
                            dataKey="title"
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(34,211,238, 0.2)', strokeWidth: 1 }} />

                        <Area
                            type="monotone"
                            dataKey="duration"
                            stroke="url(#neonGlow)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#neonGlow)"
                            dot={{ fill: '#22d3ee', stroke: '#121824', strokeWidth: 2, r: 5 }}
                            activeDot={{ r: 7, strokeWidth: 0 }}
                        >
                            <LabelList
                                dataKey="duration"
                                position="top"
                                offset={10}
                                fill="#ffffff"
                                fontSize={12}
                                fontWeight="bold"
                                formatter={(value) => (value > 0 ? value : '')}
                            />
                        </Area>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default WeeklyChart;