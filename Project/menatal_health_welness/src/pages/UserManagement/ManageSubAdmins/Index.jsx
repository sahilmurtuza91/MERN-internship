import React, { useState } from 'react'
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from 'react-router';
import ManageSubAdmins from "./ManageSubAdmins";
import Details from "./role/Details"
function index() {
    const [activeTab, setActiveTab] = useState("SubAdmin");
    const navigate = useNavigate();
    return (
        <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
                Sub-Admins & Roles
            </Typography>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column", width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Box sx={{ display: "flex", gap: "25px", mb: "20px", pb: "5px" }}>
                        {["SubAdmin", "Role",].map((status) => {
                            const isCurrentActive = activeTab === status;
                            return (
                                <Button
                                    key={status}
                                    onClick={() => {
                                        setActiveTab(status);
                                        // setPage(1);
                                    }}
                                    sx={{
                                        fontWeight: "700",
                                        fontSize: "13px",
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
                                    {status === "SubAdmin" ? "Sub-Admin" : "Role"}
                                    
                                </Button>
                            );
                        })}
                    </Box>
                    <Button
                        onClick={() => {activeTab === "SubAdmin" ? navigate("/user-management/sub-admins/add") : navigate("/user-management/role/add")} }
                        sx={{
                            backgroundColor: "var(--c_primary)",
                            color: "white",
                            minWidth: "50px",
                            display: "flex",
                            justifyContent: "end",
                            fontSize: "12px",
                            fontWeight: "350",
                            mb: "15px",
                            "&:hover": { backgroundColor: "var(--hover)" }
                        }}
                    >
                        {activeTab === "SubAdmin" ? "Add Sub-Admin" : "Add Role"}
                    </Button>
                </Box>
                <Box sx={{ width: "100%" }}>
                    {activeTab === "SubAdmin" && <ManageSubAdmins />}
                    {activeTab === "Role" && <Details />}
                </Box>
            </Box>
        </Box>
    )
}
export default index