import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

function ResponsiveAppBar({ onOpenSettings }) {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: "Dashboard", path: "/app" },
        { label: "Add-Task", path: "/app/add-task" },
        { label: "Focus Timer", path: "/app/timer" },
        { label: "Analytics", path: "/app/analytics" },
        { label: "Tasks", path: "/app/tasks" },
        // { label: "Settings", path: "/app/settings" },
    ]

    return (
        <AppBar position="sticky"

        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    className="flex items-center gap-2"
                >
                    <img src="/Images/image.png" alt="" className="w-8 h-8" />
                    Athenify
                </Typography>

                <Box className="flex gap-2">
                    {navItems.map((item) => (
                        <Button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            sx={{
                                color:
                                    location.pathname === item.path ? "black" : "white",
                                fontWeight:
                                    location.pathname === item.path ? "bold" : "normal",
                            }}
                        >
                            {item.label}
                        </Button>

                    ))}
                    <Button
                        onClick={onOpenSettings}

                        sx={{
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >

                        Settings

                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;