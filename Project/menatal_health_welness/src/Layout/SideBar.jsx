import React, { useState } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import sidebarData from '../Constant/sidebarData';
export default function SimpleSidebar({ mobileOpen, setOpenSideBar, handleSidebarToggle }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [openMenus, setOpenMenus] = useState({});

    const handleMenueClick = (route) => {
        setOpenMenus((prev) => ({
            ...prev,
            [route]: !prev[route],
        }));
    };

    const sidebarContent = (
        <Box sx={{
            width: 250,
            height: '100vh',
            backgroundColor: mobileOpen ? " white" : 'var(--c_primary)',
            color: mobileOpen ? "gray" : 'white',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }}>

            {/* LOGO */}
            <Box sx={{ p: 3, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <img src="../static/images/logo.png" alt="Logo" height={100} width={100} />
            </Box>
            {/* <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)' }} /> */}

            {/* menu list*/}
            <List sx={{ px: 1, flexGrow: 1, overflow: "auto", }}>
                {sidebarData?.map((data, index) => {
                    const hasChildren = data.children && data.children.length > 0;
                    const isOpen = Boolean(openMenus[data.route]);

                    const isChildActive = hasChildren && data.children.some(child => pathname.startsWith(child.route));
                    const isSelected = pathname === data.route || isChildActive;
                    const TargetIcon = data.icon;

                    return (
                        <Box key={index}>
                            <ListItemButton
                                onClick={() => {
                                    if (hasChildren) {
                                        handleMenueClick(data.route);
                                    } else {
                                        if (setOpenSideBar) setOpenSideBar(false);
                                        navigate(data.route);
                                    }
                                }}
                                sx={{
                                    borderRadius: '4px',
                                    mb: 0.5,
                                    backgroundColor: isSelected
                                        ? (mobileOpen ? '#e0f2fe !important' : 'white !important')
                                        : 'transparent',
                                    color: mobileOpen ? 'black' : (isSelected ? 'black' : 'white'),
                                    '&:hover': {
                                        backgroundColor: mobileOpen ? 'rgba(0, 0, 0, 0.04)' : 'var(--hover)',
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: mobileOpen ? 'black !important' : (isSelected ? 'black !important' : '#ffffff')
                                    },
                                    "& .MuiListItemText-primary": {
                                        fontSize: "0.85rem",
                                    }
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    {TargetIcon && <TargetIcon />}
                                </ListItemIcon>
                                <ListItemText primary={data.name} />
                                {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>

                            {hasChildren && (
                                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding sx={{ pl: 2.5, display: 'flex', flexDirection: 'column', }}>
                                        {data.children.map((child, childIndex) => {
                                            const isChildSelected = pathname.startsWith(child.route);
                                            return (
                                                <ListItemButton
                                                    key={childIndex}
                                                    onClick={() => {
                                                        if (setOpenSideBar) setOpenSideBar(false);
                                                        navigate(child.route);
                                                    }}
                                                    sx={{
                                                        borderRadius: '4px',
                                                        backgroundColor: isChildSelected ? (mobileOpen ? '#e0f2fe !important' : 'white !important') : 'transparent',
                                                        color: mobileOpen ? 'black' : (isChildSelected ? 'black !important' : 'rgba(255,255,255,0.8)'),
                                                        '&:hover': {
                                                            backgroundColor: mobileOpen ? 'rgba(0, 0, 0, 0.04)' : 'var(--hover)',
                                                        },
                                                        "& .MuiListItemText-primary": {
                                                            fontSize: "0.8rem",
                                                        },
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ minWidth: 17, color: mobileOpen ? 'black' : (isChildSelected ? 'black' : 'white') }}>
                                                        <FiberManualRecordIcon sx={{ fontSize: "0.5rem" }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={child.name} primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: isChildSelected ? '600' : '400' }} />
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    );
                })}
            </List>

            <Box sx={{ px: 2, mt: 'auto', display: "flex", justifyItems: "center", alignItems: "center" }}>

                <ListItemButton onClick={() => navigate('/')} sx={{ borderRadius: '8px', color: '#ff6b6b', '&:hover': { backgroundColor: mobileOpen ? 'rgba(255,0,0,0.05)' : 'var(--hover)' } }}>
                    <ListItemIcon sx={{ color: '#ff6b6b', minWidth: 38 }}><LogoutIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </Box>
        </Box>
    );

    return (
        <Box component='nav' sx={{ flexShrink: { lg: 0 } }} >
            <Drawer
                variant='temporary'
                open={mobileOpen}
                onClose={handleSidebarToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, borderRight: 'none' },
                }}

            >
                {sidebarContent}
            </Drawer>

            <Drawer
                variant='permanent'
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box', borderRight: 'none' },
                }}
                open
            >
                {sidebarContent}
            </Drawer>
        </Box>
    );
}