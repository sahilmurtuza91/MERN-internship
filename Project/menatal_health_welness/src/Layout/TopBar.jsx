import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Fixed path standard
import {
    Box,
    IconButton,
    Badge,
    Avatar,
    Typography,
    Menu,
    MenuItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Button,
    CircularProgress
} from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import LogoutIcon from '@mui/icons-material/Logout';

import { useGetNotificationQuery } from "../services/NotificationAPI";

function TopBar({ isMobile, setOpenSideBar }) {
    const navigate = useNavigate();
    const { data: NotificationData = [], isLoading } = useGetNotificationQuery();

    const [profileDropDown, setProfileDropDown] = useState(null);
    const isProfileMenuOption = Boolean(profileDropDown);

    const [notificationDropDown, setNotificationDropDown] = useState(null);
    const isNotificationMenuOption = Boolean(notificationDropDown);

    const handleProfileClick = (event) => setProfileDropDown(event.currentTarget);
    const handleProfileClose = () => setProfileDropDown(null);

    const handleNotificationClick = (event) =>
        setNotificationDropDown(event.currentTarget);
    const handleNotificationClose = () => setNotificationDropDown(null);

    const previewNotification = NotificationData.slice(0, 3);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
                px: { xs: 5, md: 6 },
                py: 1.5,
                backgroundColor: "#ffffff",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.05)",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                {isMobile && (
                    <IconButton
                        onClick={() => setOpenSideBar(true)}
                        edge="start"
                        sx={{ mr: 2, color: "#475569" }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2.5,
                    alignItems: "center",
                }}
            >
                <Tooltip describeChild title="Recived Notifications">
                    <IconButton
                        onClick={handleNotificationClick}
                        sx={{ color: "#64748b" }}
                    >
                        <Badge
                            badgeContent={NotificationData.length}
                            color="error"
                            variant={NotificationData.length > 0 ? "standard" : "dot"}
                        >
                            <NotificationsActiveIcon
                                sx={{ fontSize: "1.5rem", color: "gray-300" }}
                            />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={notificationDropDown}
                    open={isNotificationMenuOption}
                    onClose={handleNotificationClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    slotProps={{
                        paper: {
                            sx: {
                                width: 330,
                                // borderRadius: "8px",
                                mt: 1.5,
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
                                "&::before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 22,
                                    width: 12,
                                    height: 12,
                                    backgroundColor: "#ffffff",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: 2,
                            py: 1.5,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "700", fontSize: "1.05rem", color: "#1e293b" }}
                        >
                            Notifications
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                fontSize: "0.78rem",
                                fontWeight: "600",
                                // borderRadius: '6px',
                                px: 2,
                                backgroundColor: "#0067a1",
                                boxShadow: "none",
                                "&:hover": { backgroundColor: "#005585", boxShadow: "none" },
                            }}
                            onClick={() => {
                                handleNotificationClose();
                                navigate("/notifications");
                            }}
                        >
                            See All
                        </Button>
                    </Box>
                    <Divider />

                    {isLoading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
                            <CircularProgress size={24} />
                        </Box>
                    ) : previewNotification.length === 0 ? (
                        <Box sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="body2" color="textSecondary">
                                Empty
                            </Typography>
                        </Box>
                    ) : (
                        <List sx={{ p: 0 }}>
                            {previewNotification.map((notif, index) => (
                                <React.Fragment key={index}>
                                    <ListItem
                                        alignItems="flex-start"
                                        sx={{
                                            "&:hover": { backgroundColor: "#f8fafc" },
                                            py: 1,
                                            px: 2,
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                src={
                                                    notif.userAvatar ||
                                                    "../static/images/user_placeholder.png"
                                                }
                                                sx={{ width: 40, height: 40 }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        gap: 0.5,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: "0.88rem",
                                                                fontWeight: "600",
                                                                color: "#1e293b",
                                                            }}
                                                        >
                                                            {notif["Customer Name"]}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ fontSize: "0.75rem", color: "#999" }}
                                                        >
                                                            {notif.Date}
                                                        </Typography>
                                                    </Box>

                                                    <Typography
                                                        sx={{ fontSize: "0.75rem", color: "#999" }}
                                                    >
                                                        {notif.Message?.split(" ").slice(0, 8).join(" ")}
                                                        ...
                                                    </Typography>

                                                </Box>
                                            }
                                            secondary={
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.8rem",
                                                        color: "#64748b",
                                                        mt: 0.5,
                                                        lineHeight: "1.4",
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {notif.message || notif.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    )}
                </Menu>

                <Box
                    onClick={handleProfileClick}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        p: 0.5,
                    }}
                >
                    <Avatar
                        variant='body2'
                        src="../static/images/user_placeholder.png"
                        alt="Admin profile"
                        sx={{ width: 36, height: 36 }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: "600",
                            color: "#334155",
                            display: { xs: "none", sm: "block" },
                            fontSize: '0.85rem'
                        }}
                    >
                        Admin
                    </Typography>
                    <KeyboardArrowDownIcon sx={{
                        color: "gray",
                        fontSize: '1.1rem',
                        transform: isProfileMenuOption ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.2s'
                    }} />
                </Box>
                <Menu
                   anchorEl={profileDropDown}
                    open={isProfileMenuOption}
                    onClose={handleProfileClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    slotProps={{
                        paper: {
                            sx: {
                                width: 200,
                                // borderRadius: "8px",
                                mt: 1.5,
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
                                "&::before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 22,
                                    width: 12,
                                    height: 12,
                                    backgroundColor: "#ffffff",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                >
                    <MenuItem 
                    onClick={() => { 
                        handleProfileClose(); 
                        navigate('/Profile'); 
                    }}>
                        <PersonIcon sx={{ fontSize: '1.1rem', color: '#64748b' }} /> 
                        My Profile
                    </MenuItem>
                    <MenuItem 
                    onClick={() => { 
                        handleProfileClose(); 
                        navigate('/change-password'); 
                    }}>
                        <LockResetIcon sx={{ fontSize: '1.1rem', color: '#64748b' }} /> 
                        Change Password
                    </MenuItem>
                    <Divider sx={{ my: '4px !important' }} />
                    <MenuItem 
                    onClick={() => { 
                        handleProfileClose(); 
                        navigate('/'); }} 
                        sx={{ color: '#ef4444 !important' }}
                    >
                        <LogoutIcon sx={{ fontSize: '1.1rem', color: '#ef4444' }} /> 
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}

export default TopBar;
