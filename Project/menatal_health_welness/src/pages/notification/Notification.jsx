import React, { useState } from 'react'
import {
    Box,
    Button,
    Typography,
    Pagination,
    Stack,
} from "@mui/material";
import { useGetNotificationQuery } from "../../services/NotificationAPI";

function Notification() {
    const { data: NotificationData = [], isLoading } = useGetNotificationQuery();
    const indexData = [
        "S.No",
        "Date",
        "Customer Name",
        "Customer Email",
        "Title",
        "Message",
        "Action"
    ]

    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const columns = Object.keys(NotificationData?.[0] || {});
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const currentData = NotificationData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(NotificationData.length / rowsPerPage);

    return (
        <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
                Received Notifications
            </Typography>

            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
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
                                    fontSize:"13px"
                                }}
                            >
                                {item}
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
                            src="static/images/loader.gif"
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
                        width: "100%",
                        // backgroundColor: "#f3f4f6",
                        borderBottom: "1px solid #ddd",
                        py: 2,
                    }}
                >
                    {NotificationData.length === 0 ? (
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
                                No notification received
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
                                {columns.map((column) => (
                                    <Box
                                        key={column}
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
                                        <Typography sx={{fontSize:"12px"}}>
                                            {row[column] ?? "-"}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        ))
                    )}
                </Box>
                {/* pagination */}
                {NotificationData.length > rowsPerPage && (
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
    );
}

export default Notification

// color: #7e828a;
//     background: rgba(238, 239, 243, 0.5019607843);

