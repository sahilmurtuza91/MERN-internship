import React, { useState } from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router";

function MainContainer() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", width: "100vw" }}>
      {!isMobile && (
        <Box sx={{ width: 250, flexShrink: 0 }}>
          <SideBar mobileOpen={false} />
        </Box>
      )}

      {isMobile && (
        <Drawer
          open={openSideBar}
          onClose={() => setOpenSideBar(false)}
          sx={{
            '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) !important',
          }}
        >
          <SideBar
            mobileOpen={openSideBar}
            setOpenSideBar={setOpenSideBar}
            handleSidebarToggle={() => setOpenSideBar(!openSideBar)}
          />
        </Drawer>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0, overflow: "hidden", flexGrow: 1, height: "100vh" }}>
        <TopBar
          isMobile={isMobile}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />

        <Box
          component="main"
          sx={{ flexGrow: 1, overflowY: "auto", width: "100%",backgroundColor: "#f1f5f9",paddingLeft:2 }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default MainContainer;
