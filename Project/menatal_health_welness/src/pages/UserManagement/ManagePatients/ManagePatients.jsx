import React, { useState, } from 'react'
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Typography,
    Pagination,
    Stack,
} from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

import { useGetPatientsDataQuery } from "../../../services/PatientsAPI"
function ManagePatients() {
    const navigate = useNavigate();
    const indexData = [
        { index: "S.No", value: "id" },
        { index: "Name", value: "Full_Name" },
        { index: "Email", value: "email" },
        { index: "Status", value: "status" },
        { index: "Join Date", value: "JoinDate" },
        { index: "Last Active", value: "lastActive" },
        // { index: "Action", value: "dummy_image_url" }
    ]

    // doctorData
    const { data: patientData = [], isLoading } = useGetPatientsDataQuery();
    const [page, setPage] = useState(1);

    const rowsPerPage = 10;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentData = patientData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(patientData.length / rowsPerPage);

    return (
        <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
                Manage Specialists
            </Typography>

            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>

                <Box sx={{ display: "flex", justifyContent: "end", width:"100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "15px",  }}>
                        <Button
                            onClick={() => navigate("/user-management/patients/add")}
                            sx={{
                                backgroundColor: "var(--c_primary)",
                                color: "white",
                                minWidth:"50px",
                                display: "flex",
                                justifyContent: "end",
                                fontSize: "12px",
                                fontWeight: "350",
                                mb: "15px",
                                "&:hover": { backgroundColor: "var(--hover)" }
                            }}

                        >
                            Add New Patient
                        </Button>

                        <Button
                            // onClick={() => navigate("/user-management/patients/CSV")}
                            sx={{
                                backgroundColor: "var(--c_primary)",
                                color: "white",
                                minWidth:"50px",
                                display: "flex",
                                justifyContent: "end",
                                fontSize: "12px",
                                fontWeight: "350",
                                mb: "15px",
                                "&:hover": { backgroundColor: "var(--hover)" }
                            }}

                        >
                          <GetAppIcon /> Export CSV
                        </Button>


                    </Box>
                </Box>
                <Box sx={{ width: "100%", overflowX: "auto", mb: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            backgroundColor: "#f3f4f6",
                            borderBottom: "1px solid #ddd",
                            py: 2,
                            minWidth: "850px",
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
                                minHeight: "200px",
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
                        {!isLoading && patientData.length === 0 ? (
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
                                    {indexData.map((item, colIndex) => (
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
                                            <Typography sx={{ fontSize: "12px" }}>
                                                {item.value === "id"
                                                    ? startIndex + rowIndex + 1
                                                    : (row[item.value] ?? "-")
                                                }
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            ))
                        )}
                    </Box>
                    {/* pagination */}
                    {patientData.length > rowsPerPage && (
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

export default ManagePatients