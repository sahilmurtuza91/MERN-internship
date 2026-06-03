import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthContainer() {
  return (
    <Box
      component="div"
      // style={{ opacity: 0.5 }}
      className="auth-container"
      sx={{
        backgroundImage: "url('/static/images/background.png')",
        minHeight: "100vh",
        // width: "100vw",
        position: "relative",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
      }}
    >
      <Container
        maxWidth="xm"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            position: "relative",
            zIndex: "2",
          }}
        >
          <figure
            style={{
              textAlign: "center",
              width: "250px",
              height: "350px",
              marginBottom: "-100px",
              marginTop: "-40px",
            }}
          >
            <img
              src="/static/images/logo.svg"
              alt="logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </figure>

          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}

export default AuthContainer;
