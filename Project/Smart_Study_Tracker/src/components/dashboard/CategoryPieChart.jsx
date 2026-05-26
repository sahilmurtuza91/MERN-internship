import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer, Cell, } from "recharts";

const RenderGradientSector = (props) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        index,
    } = props;

    return (
        <g>
            <defs>
                <radialGradient
                    id={`fillGradient${index}`}
                    cx={cx}
                    cy={cy}
                    r={outerRadius}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="60%" stopColor={fill} stopOpacity={0.1} />
                    <stop offset="95%" stopColor={fill} stopOpacity={0.7} />
                    <stop offset="100%" stopColor={fill} stopOpacity={0.9} />
                </radialGradient>
            </defs>

            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={`url(#fillGradient${index})`}
                stroke={fill}
                strokeWidth={1.5}
            />
        </g>
    );
};

function CategoryPieChart() {
    const tasks = useSelector((state) => state.tasks.tasks);

    const categoryTotals = {};

    tasks.forEach((task) => {
        if (task.complete && task.category) {
            const categoryName = task.category;
            const categoryDuration = Number(task.duration) || 0;

            if (categoryTotals[categoryName]) {
                categoryTotals[categoryName] += categoryDuration;
            } else {
                categoryTotals[categoryName] = categoryDuration;
            }
        }
    });

    // convert the data to array for the use of rechart
    const data = Object.keys(categoryTotals).map((key) => ({
        name: key,
        value: categoryTotals[key],
    }));

    const COLORS = {
        Coding: "#22d3ee",
        Revision: "#a855f7",
        "Exam Preparation": "#f59e0b",
        Lecture: "#34d399",
        Assignment: "#ec4899",
        Break: "#3b82f6",
        "Self Study": "#22c55e",
    };


    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#121824]/95 border border-slate-800 backdrop-blur-xl p-3 rounded-xl text-white shadow-2xl">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {payload[0].name}
                    </p>

                    <p
                        className="text-sm font-extrabold mt-0.5"
                        style={{ color: payload[0].payload.fill }}
                    >
                        Time Logged: {payload[0].value} mins
                    </p>
                </div>
            );
        }

        return null;
    };

    // EMPTY STATE
    if (data.length === 0) {
        return (
            <div className="w-full h-80 bg-[#121824]/60 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col">

                <div className="absolute top-0 left-0 h-28 w-28 bg-cyan-400/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-28 w-28 bg-purple-500/10 blur-3xl"></div>

                <div className="relative z-10">
                    <h2 className="text-white font-bold text-lg tracking-wide">
                        Category Distribution
                    </h2>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative">

                    <div className="relative flex items-center justify-center">

                        <div className="w-44 h-44 rounded-full border-14 border-slate-800/80"></div>

                        <div className="absolute w-28 h-28 rounded-full border-10 border-slate-700/60"></div>

                        <div className="absolute flex flex-col items-center">
                            <span className="text-slate-500 text-[11px] uppercase tracking-[0.3em]">
                                No Data
                            </span>

                            <span className="text-white font-bold text-lg mt-1">
                                0 Tasks
                            </span>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-slate-400 text-center max-w-xs leading-relaxed">
                        Complete tasks to visualize your study category distribution and productivity insights.
                    </p>

                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-80 bg-[#121824]/60 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden">

            <div className="absolute top-0 left-0 h-28 w-28 bg-cyan-400/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-28 w-28 bg-purple-500/10 blur-3xl"></div>

            <div className="relative z-10">
                <h2 className="text-white font-bold text-lg tracking-wide">
                    Category Distribution
                </h2>
            </div>

            <div className="w-full h-80 relative flex items-center justify-center mt-auto">

                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip content={<CustomTooltip />} />

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={30}
                            outerRadius={100}
                            paddingAngle={5}
                            shape={RenderGradientSector}
                            isAnimationActive={true}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[entry.name] || "#94a3b8"}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                        Share
                    </span>

                    <span className="text-white font-bold tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                        Tasks
                    </span>
                </div>

            </div>
        </div>
    );
}

export default CategoryPieChart;