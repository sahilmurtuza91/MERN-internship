import React, { useState, } from 'react'
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Typography,
    Pagination,
    Stack,
    IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import TodayIcon from '@mui/icons-material/Today';
import GetAppIcon from '@mui/icons-material/GetApp';
import familyDetail from "../../../Constant/familyDetail"
function Sessions() {
    const navigate = useNavigate();
    const indexData = [
        { index: "S.No", value: "id" },
        { index: "Patient Name", value: "name" },
        { index: "Specialist", value: "email" },
        { index: "Date", value: "relationship" },
        { index: "Time", value: "relationship" },
        { index: "Session Type", value: "patientName" },
        { index: "Priority", value: "status" },
        { index: "Specialist Status", value: "accessLevel" },
        { index: "Status", value: "joinDate" },
        { index: "Action", value: "action" }
    ]


    const [isLoading, setIsLoading] = useState(false);
    // const { data: doctorData = [], isLoading } = useGetDoctorDataQuery();
    const [page, setPage] = useState(1);
    const [activeStatus, setActiveStatus] = useState("Upcoming");
    const filterfamilyDetail = familyDetail.filter((doc) => doc.status?.toLowerCase() === activeStatus.toLowerCase())

    const rowsPerPage = 10;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentData = filterfamilyDetail.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filterfamilyDetail.length / rowsPerPage);

    const getStatusBadgeStyles = (value) => {
        const normalizedValue = value?.toLowerCase();

        switch (normalizedValue) {
            case "active":
                return {
                    backgroundColor: "#e6f4ea",
                    color: "#137333",
                };

            case "pending":
                return {
                    backgroundColor: "#fef7e0",
                    color: "#b06000",
                };

            case "suspended":
                return {
                    backgroundColor: "#fce8e6",
                    color: "#c5221f",
                };

            case "full":
                return {
                    backgroundColor: "#e0f2fe",
                    color: "#0369a1",
                };

            case "limited":
                return {
                    backgroundColor: "#f3e8ff",
                    color: "#7e22ce",
                };

            default:
                return {
                    backgroundColor: "#f1f5f9",
                    color: "#475569",
                };
        }
    };

    return (
        <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" , minWidth:"1000px",}}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
                Sessions Management
            </Typography>

            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>

                <Box sx={{ display: "flex", justifyContent: "end", gap:2 }}>
                    <Button
                        // onClick={() => navigate("/user-management/specialists/add")}
                        sx={{
                            backgroundColor: "var(--c_primary)",
                            color: "white",
                            // width: "50px",
                            display: "flex",
                            justifyContent: "end",
                            fontSize: "12px",
                            fontWeight: "350",
                            mb: "15px",
                            "&:hover": { backgroundColor: "var(--hover)" }
                        }}

                    >
                      <TodayIcon />  Schedule Session
                    </Button>

                    <Button
                        // onClick={() => navigate("/user-management/specialists/add")}
                        sx={{
                            backgroundColor: "var(--c_primary)",
                            color: "white",
                            // width: "50px",
                            display: "flex",
                            justifyContent: "end",
                            fontSize: "12px",
                            fontWeight: "350",
                            mb: "15px",
                            "&:hover": { backgroundColor: "var(--hover)" }
                        }}

                    >
                       <GetAppIcon /> Export Schedule
                    </Button>
                </Box>

                <Box sx={{ display: "flex", gap: "10px", mb: "20px", pb: "5px" }}>
                    {["Upcoming", "Completed", "Canceled", "Pending Approval"].map((status) => {
                        const isCurrentActive = activeStatus === status;
                        return (
                            <Button
                                key={status}
                                onClick={() => {
                                    setActiveStatus(status);
                                    setPage(1);
                                }}
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                    pb: "8px",
                                    transition: "all 0.2s ease-in-out",
                                    color:isCurrentActive ? "black": "gray",
                                    borderBottom: isCurrentActive ? "3px solid black" : "3px solid transparent",

                                    "&:hover": {
                                        color: "var(--c_primary_hover)",
                                    }
                                }}
                            >
                                {status}
                            </Button>
                        );
                    })}
                </Box>

                <Box sx={{
                    width: "100%", overflowX: "auto", mb: 2,
                    "::-webkit-scrollbar ": {
                        display: "none"
                    }
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            minWidth: "1000px",
                            backgroundColor: "#f3f4f6",
                            borderBottom: "1px solid #ddd",
                            py: 2,
                        }}
                    >
                        {indexData.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: 1,
                                    textAlign: "center",

                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#7e828a",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        fontSize: "14px"
                                    }}
                                >
                                    {item.index}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {isLoading && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: "300px",
                            }}
                        >
                            <img
                                src="../../static/images/loader.gif"
                                alt="Loading..."
                                style={{
                                    width: "80px",
                                    height: "80px",
                                }}
                            />
                        </Box>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            minWidth: "1000px",
                            // backgroundColor: "#f3f4f6",
                            borderBottom: "1px solid #ddd",
                            py: 2,
                        }}
                    >
                        {!isLoading && filterfamilyDetail.length === 0 ? (
                            <Box
                                sx={{
                                    py: 5,
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#7e828a",
                                        fontSize: "18px",
                                    }}
                                >
                                    No Record found
                                </Typography>
                            </Box>
                        ) : (
                            currentData?.map((row, rowIndex) => (
                                <Box
                                    key={row.ID || rowIndex}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: "100%",
                                        py: 2,
                                        borderBottom: "1px solid #eee",
                                    }}
                                >
                                    {indexData.map((item, colIndex) => {
                                        const cellValue = row[item.value];
                                        console.log("Cell Value is : ", cellValue);
                                        const isBadgeColumn =
                                            item.value === "status" ||
                                            item.value === "accessLevel";
                                        // console.log("isStatusColmn value: ", isStatusColumn);
                                        const badgeStyle = isBadgeColumn
                                            ? getStatusBadgeStyles(cellValue)
                                            : {};
                                        return (
                                            <Box
                                                key={colIndex}
                                                sx={{
                                                    flex: 1,
                                                    textAlign: "center",
                                                    px: 1,
                                                    whiteSpace: "nowrap",
                                                    // overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    // maxWidth: "200px",
                                                    overflowY: "auto",
                                                    "&::-webkit-scrollbar": {
                                                        display: "none",
                                                    },

                                                }}

                                            >
                                                {isBadgeColumn ? (
                                                    <Box
                                                        sx={{
                                                            py: 0.5,
                                                            px: 2,
                                                            borderRadius: "50px",
                                                            fontSize: "12px",
                                                            fontWeight: "700",
                                                            textAlign: "center",
                                                            display: "inline-block",
                                                            ...badgeStyle
                                                        }}
                                                    >
                                                        {cellValue ?? "-"}
                                                    </Box>
                                                ) : item.value === "action" ? (
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent:"center",
                                                            gap: "5px",
                                                            pl:2
                                                        }}
                                                    >
                                                        <IconButton
                                                            size='small'
                                                            sx={{
                                                                backgroundColor: "var(--c_primary)",
                                                                color: "white",
                                                                "&:hover": { backgroundColor: "black" },

                                                            }}
                                                        // onClick={() =>}
                                                        >
                                                            <VisibilityIcon
                                                                fontSize='small'
                                                            />
                                                        </IconButton>
                                                        <IconButton
                                                            size="small"
                                                            // onClick={() =>
                                                            //     handleEdit(row)
                                                            // }
                                                            sx={{
                                                                backgroundColor: "var(--c_primary)",
                                                                color: "white",
                                                                "&:hover": { backgroundColor: "black" }
                                                            }}
                                                        >
                                                            <EditIcon fontSize="small"
                                                            />
                                                        </IconButton>
                                                    </Box>
                                                ) : (
                                                    <Typography sx={{ fontSize: "13px", color: "#334155", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", }}>
                                                        {item.value === "id"
                                                            ? startIndex + rowIndex + 1
                                                            : (cellValue ?? "-")
                                                        }
                                                    </Typography>
                                                )}
                                            </Box>
                                        )
                                    })}
                                </Box>
                            ))
                        )}
                    </Box>
                    {/* pagination */}
                    {familyDetail.length > rowsPerPage && (
                        <Stack
                            spacing={2}
                            sx={{
                                mt: 3,
                                alignItems: "center",
                            }}
                        >
                            <Pagination
                                page={page}
                                count={totalPages}
                                // color="primary"
                                onChange={(event, value) =>
                                    setPage(value)
                                }
                            />
                        </Stack>
                    )}
                </Box>

            </Box>
        </Box>
    );
}

export default Sessions