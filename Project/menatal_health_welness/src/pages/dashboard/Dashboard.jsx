import React from "react";
import { Box, Divider, LinearProgress, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { BorderAllRounded, Flare } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CallToActionIcon from '@mui/icons-material/CallToAction';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CircleIcon from '@mui/icons-material/Circle';

const data = [
  { name: "Page A", pv: 2400 },
  { name: "Page B", pv: 1398 },
  { name: "Page C", pv: 9800 },
  { name: "Page D", pv: 3908 },
  { name: "Page E", pv: 4800 },
  { name: "Page F", pv: 3800 },
  { name: "Page G", pv: 4300 },
];

const stateData = [
  {
    title: "All Earnings",
    value: "$30200",
    icon: <AttachMoneyIcon className="svg_icn" />,
    percentageChange: "10% changes on profit",
    trend: "up",
    trendColor: "#ff9800",
    chartData: [
      { name: "Jan", value: 10 },
      { name: "Feb", value: 20 },
      { name: "Mar", value: 15 },
      { name: "Apr", value: 25 },
      { name: "May", value: 22 },
      { name: "Jun", value: 30 },
    ],
  },
  {
    title: "System Alerts",
    value: "145",
    icon: <CalendarTodayIcon className="svg_icn" />,
    percentageChange: "28% of total alerts",
    trend: "down",
    trendColor: "#f44336",
    chartData: [
      { name: "Jan", value: 30 },
      { name: "Feb", value: 25 },
      { name: "Mar", value: 28 },
      { name: "Apr", value: 20 },
      { name: "May", value: 22 },
      { name: "Jun", value: 15 },
    ],
  },
  {
    title: "Sessions",
    value: "290+",
    icon: <DescriptionIcon className="svg_icn" />,
    percentageChange: "10k daily sessions",
    trend: "up",
    trendColor: "#4caf50",
    chartData: [
      { name: "Jan", value: 5 },
      { name: "Feb", value: 10 },
      { name: "Mar", value: 8 },
      { name: "Apr", value: 15 },
      { name: "May", value: 12 },
      { name: "Jun", value: 18 },
    ],
  },
  {
    title: "Users",
    value: "500",
    icon: <ThumbUpAltIcon className="svg_icn" />,
    percentageChange: "1k new users this month",
    trend: "up",
    trendColor: "#2196f3",
    chartData: [
      { name: "Jan", value: 10 },
      { name: "Feb", value: 12 },
      { name: "Mar", value: 9 },
      { name: "Apr", value: 15 },
      { name: "May", value: 13 },
      { name: "Jun", value: 17 },
    ],
  },
];

const systemAlertsChartData = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 75 },
  { name: "Mar", value: 120 },
  { name: "Apr", value: 90 },
  { name: "May", value: 110 },
  { name: "Jun", value: 95 },
  { name: "Jul", value: 130 },
  { name: "Aug", value: 100 },
];

const sessionsChartData = [
  { name: "Web Sessions", value: 500, percentage: "+15.00%" },
  { name: "Mobile Sessions", value: 350, percentage: "+10.00%" },
  { name: "API Sessions", value: 150, percentage: "-5.00%" },
];

const COLORS = ["#f44336", "#2196f3", "#00bcd4"];

const usersDemographicsData = [
  { source: "Male", percentage: 60, COLOR: "#2196f3" },
  { source: "Female", percentage: 35, COLOR: "#f44336" },
  { source: "Other", percentage: 5, COLOR: "#607d8b" },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography sx={{pl:3, pt:3, fontWeight:900, fontSize:"20px",}}>Dashboard</Typography>
      {/* top card */}
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4 ">
        {stateData?.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                height: "150px",
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
                padding: "1rem",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.03)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  "& .mini-icon-box": {
                    backgroundColor: "black",
                    color: "white",
                  },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
                <Box
                  className="mini-icon-box"
                  sx={{
                    p: "6px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    display: "flex",
                    color: "#475569",
                  }}
                >
                  {data.icon}
                </Box>
                <Typography sx={{ color: "gray", fontSize: "13px", mt: 0.5 }}>
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "700",
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                >
                  {data.value}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 120,
                  height: 120,
                  color: "white",
                  backgroundColor: data.trendColor,
                  padding: "8px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%", height: "45%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.chartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ffffff"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>

                <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                  {data.percentageChange}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full p-4 ">
        {/* first graph */}
        <Box sx={{
          backgroundColor: "var(--c_primary)",
          borderRadius: "10px",
          padding: 3,
          color: "white",
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",

          }}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px" }}>System Alerts</Typography>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", display: "flex", alignItems: "center", gap: "10px" }}><CallToActionIcon /> 3%</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: 250,

            }}
          >
            <ResponsiveContainer width="100%" height="100%" >
              <LineChart
                data={systemAlertsChartData}
                margin={{ top: 30, right: 10, left: 10, bottom: 30 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={false}
                />

                <XAxis dataKey="name" hide={true} />

                <Tooltip
                  labelStyle={{ color: "black" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <Box>
              <Typography sx={{ fontWeight: "700" }}>42</Typography>
              <Typography >New Alerts</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: "700" }}>321</Typography>
              <Typography>Total Alerts</Typography>
            </Box>
          </Box>
        </Box>

        {/* second graph */}
        <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "black", mb: 2 }}>
            Sessions
          </Typography>
          <Divider></Divider>
          <Box sx={{ width: "100%", height: 250, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Tooltip
                  labelStyle={{ color: "black" }}
                  itemStyle={{ color: "black" }}
                />

                <Pie
                  data={sessionsChartData}
                  cx="50%"
                  cy="45%"
                  innerRadius="60%"
                  outerRadius="80%"
                  dataKey="value"
                  nameKey="name"
                >
                  {sessionsChartData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
                width: "70%"
              }}
            >
              {sessionsChartData?.map((entry, index) => (
                <Typography
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "10px",
                    fontWeight: "600",
                    color: COLORS[index % COLORS.length],
                  }}
                >
                  <CropSquareIcon
                    sx={{
                      backgroundColor: COLORS[index % COLORS.length],
                      color: COLORS[index % COLORS.length],
                      fontSize: "12px",
                    }}
                  />
                  {entry.name}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "18px",
                mt: "10px"
              }}
            >
              {sessionsChartData?.map((entry, index) => (
                <Typography
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  <Typography>
                    <CircleIcon
                      sx={{
                        color: COLORS[index % COLORS.length],
                        fontSize: "16px",
                      }}
                    />
                    {entry.name}
                  </Typography>

                  <Typography sx={{ fontWeight: 200 }}>{entry.percentage}</Typography>

                </Typography>

              ))}
              <Typography></Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "black", mb: 2 }}>
            Users
          </Typography>
          <Divider></Divider>

          <Box sx={{ width: "100%", height: 150, display: "flex", flexDirection: "column", alignItems: "center", mt: "15px", gap: "20px" }}>
            {usersDemographicsData?.map((data, index) => (
              <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "2px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between",  }}>
                  <Typography sx={{fontWeight:200, fontSize:"15px"}}>{data.source}</Typography>
                  <Typography sx={{fontWeight:200, fontSize:"15px"}}>{data.percentage}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={data.percentage}
                  sx={{
                    height: 8,
                    borderRadius: "4px",
                    backgroundColor: "#e2e8f0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: data.COLOR,
                      borderRadius: "4px",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

{/* <LinearProgress
                variant="determinate"
                value={data.percentage}
                sx={{
                  height: 8,
                  borderRadius: "4px",
                  backgroundColor: "#e2e8f0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: item.color,
                    borderRadius: "4px",
                  },
                }}
              /> */}
