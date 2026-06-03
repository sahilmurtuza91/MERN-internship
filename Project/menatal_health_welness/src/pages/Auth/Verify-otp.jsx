import * as React from "react";
import {
  Box,
  Button,
  CssBaseline,
  FormLabel,
  FormControl,
  TextField,
  Typography,
  Stack,
  styled,
  IconButton,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(3.5),
  gap: theme.spacing(3),
  margin: "auto",
  backgroundColor: "#f4f4f4",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "20px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
}));

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [countDown, setCountDown] = React.useState(59);
  const [otp, setOtp] = React.useState(new Array(4).fill(""));
  const [otpError, setOtpError] = React.useState("");

  const otpRef = React.useRef([]);
  React.useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countDown]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    let newOtp = [...otp];
    newOtp[index] = element.value.slice(0, 1);
    setOtp(newOtp);
    setOtpError("");
    if (index < 3 && element.value) {
      console.log(index, otpRef.current[index + 1]);
      otpRef.current[index + 1].focus();
    }
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    if (fullOtp.length < 4) {
      setOtpError("Please enter all 4 digits!");
      return;
    }
    navigate("/reset-password");
  };

  const handleResendClick = () => {
    setOtp(new Array(4).fill(""));
    setOtpError("");
    setCountDown(59);
    alert("A new OTP code has been sent to your email!");
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column">
        <Card variant="outlined">
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              mb: 1,
            }}
          >
            <IconButton
              onClick={() => navigate("/forgot-password")}
              sx={{
                position: "absolute",
                left: 0,
                color: "#1d1d1d",
                p: 0.5,
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "1.4rem" }} />
            </IconButton>
            <Typography
              component="h1"
              sx={{
                width: "100%",
                fontSize: "1.2rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "#333",
              }}
            >
              Verify OTP
            </Typography>
          </Box>

          {/* Form Layout */}
          <Box
            component="form"
            onSubmit={handleVerifySubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1.5,
            }}
          >
            <FormControl error={Boolean(otpError)}>
              <FormLabel
                sx={{
                  mb: 1.5,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#475569",
                  textAlign: "center",
                }}
              >
                Enter 4-digit code sent to your email
              </FormLabel>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mb: otpError ? 1 : 0,
                }}
              >
                {otp.map((data, index) => (
                  <TextField
                    inputRef={(el) => (otpRef.current[index] = el)}
                    key={index}
                    type="text"
                    variant="outlined"
                    size="small"
                    value={data}
                    autoFocus={index === 0}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        padding: "8px 0",
                      },
                    }}
                    sx={{
                      width: "50px",
                      backgroundColor: "transparent",
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                      },
                    }}
                    onChange={(e) => handleOtpChange(e.target, index)}
                  />
                ))}
              </Box>

              {otpError && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ textAlign: "center", mt: 1, fontWeight: "500" }}
                >
                  {otpError}
                </Typography>
              )}
            </FormControl>

            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{
                  py: 1,
                  fontWeight: "bold",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  textTransform: "none",
                  mt: 1,
                  backgroundColor: "var(--c_primary)",
                }}
              >
                Verify OTP
              </Button>

              {countDown === 0 ? (
                <Box sx={{ textAlign: "center", pt: 2 }}>
                  <Typography
                    onClick={handleResendClick}
                    sx={{
                      cursor: "pointer",
                      color: "#0067a1",
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      display: "inline-block",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Resend OTP
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center", pt: 2 }}>
                  <Typography sx={{ fontSize: "0.85rem", color: "#717171" }}>
                    The verification code will expire in{" "}
                    <span style={{ fontWeight: "bold", color: "#1d1d1d" }}>
                      00:{countDown < 10 ? `0${countDown}` : countDown}
                    </span>
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
