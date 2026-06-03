import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormLabel,
  FormControl,
  Link,
  TextField,
  Typography,
  Stack,
  styled,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MuiCard from "@mui/material/Card";
import { nameAdmin, nameVenue } from "../../Constant/projectName";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      remember: Yup.boolean(),
      email: Yup.string()
        .required("Email is required!")
        .matches(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          "Please enter a valid email address!",
        ),
      password: Yup.string()
        .min(8, "Password must be at least 8 character")
        .required("Password is required!"),
    }),
    onSubmit: () => {
      Navigate("/dashboard");
     },
  });

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "1.1rem",
              fontWeight: "bold",
              textAlign: "center",
              mb: 0.5,
              color: "#333",
            }}
          >
            Log in to {nameAdmin}
          </Typography>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1.5,
            }}
          >
            {/* Email Field */}
            <FormControl>
              <FormLabel
                htmlFor="email"
                sx={{
                  mb: 0.5,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#475569",
                }}
              >
                Email Address
              </FormLabel>
              <TextField
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                // autoFocus
                required
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "transparent",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                  },
                }}
                // InputProps={{
                //   style:{
                //     fontSize:"0.2rem",
                //     padding: "8px 12px"
                //   }
                // }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>

            {/* Password Field */}
            <FormControl>
              <FormLabel
                htmlFor="password"
                sx={{
                  mb: 0.5,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  color: "#475569",
                }}
              >
                Password
              </FormLabel>
              <TextField
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "transparent",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    position: "relative",
                  }, // make the input box white and error on transparent cober box color
                  "& .MuiInputAdornment-root": {
                    zIndex: 5, // to make the icon on the top of white color
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment className="eye_btn" position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>

            {/* Remember me checkBox */}
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  size="small"
                  id="remember"
                  name="remember"
                />
              }
              label={
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Remember me
                </Typography>
              }
              checked={formik.values.remember}
              onChange={formik.handleChange}
            />

            {/* Sign In Button */}
            <Button
              // onClick={() => {
              //   Navigate("/dashboard");
              // }}
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
              Sign in
            </Button>

            {/* Forgot Password Link */}
            <Link
              onClick={()=>Navigate("/forgot-password")}
              component="button"
              type="button"
              variant="body2"
              sx={{
                alignSelf: "center",
                mt: 1,
                textDecoration: "none",
                fontSize: "0.825rem",
              }}
            >
              Forgot your password?
            </Link>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
