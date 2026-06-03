import React, { useState } from 'react'
import SubAdminsData from "../../../../Constant/SubAdminsData"
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Typography,
    Pagination,
    Stack,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from '@mui/icons-material/GetApp';
import adminRole from '../../../../Constant/adminRole'

function Details() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const indexData = [
        { index: "S.No", value: "id" },
        { index: "Role Name", value: "roleName" },
        { index: "Status", value: "status" },
        { index: "Action", value: "action" }
    ]
    const rowsPerPage = 10;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentData = adminRole.slice(startIndex, endIndex);
    const totalPages = Math.ceil(adminRole.length / rowsPerPage);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>
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
                        {!isLoading && adminRole.length === 0 ? (
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
                                    key={row.id || rowIndex}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        width: "100%",
                                        py: 2,
                                        borderBottom: "1px solid #eee",
                                        alignItems: "center",
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
                                                // maxWidth: "200px",
                                                overflowY: "auto",
                                                "&::-webkit-scrollbar": {
                                                    display: "none",
                                                },

                                            }}

                                        >
                                            {/* <Typography sx={{ fontSize: "12px" }}>
                                                {item.value === "id"
                                                    ? startIndex + rowIndex + 1
                                                    : (row[item.value] ?? "-")
                                                }
                                            </Typography> */}
                                            {item.value === "id" ? (
                                                <Typography
                                                    fontSize={12}
                                                >
                                                    {startIndex + rowIndex + 1}
                                                </Typography>
                                            ) : item.value === "image" ? (
                                                <img
                                                    src={row.image}
                                                    alt={row.name}
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover"
                                                    }}
                                                />
                                            ) : item.value === "action" ? (
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        gap: 0.5,
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

                                                    <IconButton
                                                        size="small"
                                                        // onClick={() =>
                                                        //     handleDelete(row.id)
                                                        // }
                                                        sx={{
                                                            backgroundColor: "var(--c_primary)",
                                                            color: "white",
                                                            "&:hover": { backgroundColor: "black" }
                                                        }}
                                                    >
                                                        <DeleteIcon
                                                            fontSize="small"
                                                        />
                                                    </IconButton>
                                                </Box>
                                            ) : (
                                                <Typography
                                                    sx={{
                                                        fontSize: "12px",
                                                        whiteSpace: "nowrap",
                                                        overflowX: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {row[item.value] ?? "-"}
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            ))
                        )}
                    </Box>
                    {/* pagination */}
                    {SubAdminsData.length > rowsPerPage && (
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
export default Details