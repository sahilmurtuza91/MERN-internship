import React, { useState, } from 'react'
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Typography,
    Pagination,
    Stack,
} from "@mui/material";

import { useGetDoctorDataQuery } from "../../../services/DoctorAPI"
function ManageSpecialists() {
    const navigate = useNavigate();
    const indexData = [
        { index: "S.No", value: "id" },
        { index: "Name", value: "full_name" },
        { index: "Email", value: "email" },
        { index: "Phone", value: "phone" },
        { index: "Specialization", value: "specialization" },
        { index: "Status", value: "status" },
        { index: "Action", value: "dummy_image_url" }
    ]


    const { data: doctorData = [], isLoading } = useGetDoctorDataQuery();
    const [page, setPage] = useState(1);
    const [activeStatus, setActiveStatus] = useState("Pending");
    const filterDoctorData = doctorData.filter((doc) => doc.status?.toLowerCase() === activeStatus.toLowerCase())

    const rowsPerPage = 10;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentData = filterDoctorData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filterDoctorData.length / rowsPerPage);

    const getStatusBadgeStyles = (status) => {
        const normalizedStatus = status?.toLowerCase();
        switch (normalizedStatus) {
            case "approved":
                return { backgroundColor: "#e6f4ea", color: "#137333" };
            case "pending":
                return { backgroundColor: "#fef7e0", color: "#b06000" };
            case "suspended":
                return { backgroundColor: "#fce8e6", color: "#c5221f" };
            default:
                return { backgroundColor: "#f1f5f9", color: "#475569" };
        }
    };

    return (
        <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
                Manage Specialists
            </Typography>

            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>

                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                        onClick={() => navigate("/user-management/specialists/add")}
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
                        Add New Specialist
                    </Button>
                </Box>

                <Box sx={{ display: "flex", gap: "25px", mb: "20px", pb: "5px" }}>
                    {["Pending", "Approved", "Suspended"].map((status) => {
                        const isCurrentActive = activeStatus === status;
                        return (
                            <Button
                                key={status}
                                onClick={() => {
                                    setActiveStatus(status);
                                    setPage(1);
                                }}
                                sx={{
                                    fontWeight: "900",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    pb: "8px",
                                    transition: "all 0.2s ease-in-out",
                                    color: "black",
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

                <Box sx={{ width: "100%", overflowX: "auto", mb: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            minWidth: "850px",
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
                            minWidth: "850px",
                            // backgroundColor: "#f3f4f6",
                            borderBottom: "1px solid #ddd",
                            py: 2,
                        }}
                    >
                        {!isLoading && filterDoctorData.length === 0 ? (
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
                                    No {activeStatus} specialists found
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
                                        const isStatusColumn = item.value === "status";
                                        console.log("isStatusColmn value: ",isStatusColumn);
                                        const badgeStyle = isStatusColumn ? getStatusBadgeStyles(cellValue) : {};
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
                                                    maxWidth: "200px",
                                                    overflowY: "auto",
                                                    "&::-webkit-scrollbar": {
                                                        display: "none",
                                                    },

                                                }}

                                            >
                                                {isStatusColumn ? (
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
                                                ) : (
                                                    <Typography sx={{ fontSize: "13px", color: "#334155", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", maxWidth: "180px" }}>
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
                    {doctorData.length > rowsPerPage && (
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

export default ManageSpecialists