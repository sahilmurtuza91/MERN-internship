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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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

export default function ChangePassword() {
    const [showPassword, setShowPassword] = React.useState({
        old: false,
        main: false,
        confirm: false
    });

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Oldpassword:"",
            password: "",
            ConfirmPassword: "",
        },
        validationSchema: Yup.object({
            Oldpassword: Yup.string()
                .min(8, "Password must be at least 8 character")
                .required("Password is required!"),
            password: Yup.string()
                .min(8, "Password must be at least 8 character")
                .matches(
                    /[A-Z]/,
                    "Password must contain at least one uppercase letter"
                )
                .matches(
                    /[!@#$%^&*(),.?":{}|<>]/,
                    "Password must contain at least one special character"
                )
                .required("Password is required!"),
            ConfirmPassword: Yup.string()
                .matches(
                    /[A-Z]/,
                    "Password must contain at least one uppercase letter"
                )
                .matches(
                    /[!@#$%^&*(),.?":{}|<>]/,
                    "Password must contain at least one special character"
                )
                .required("Please confirm your password!")
                .oneOf([Yup.ref("password")], "Passwords do not match!"),
        }),
        onSubmit: () => {
            navigate("/dashboard");
        },
    });

    return (
        <>
            <CssBaseline />
            <SignInContainer direction="column">
                <Card variant="outlined">
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
                            onClick={() => navigate("/dashboard")}
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
                            Reset Password
                        </Typography>
                    </Box>
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
                        {/* Old Password */}
                        <FormControl>
                            <FormLabel
                                htmlFor="Oldpassword"
                                sx={{
                                    mb: 0.5,
                                    fontWeight: "600",
                                    fontSize: "0.85rem",
                                    color: "#475569",
                                }}
                            >
                                Old Password
                            </FormLabel>
                            <TextField
                                name="Oldpassword"
                                placeholder="Old Password"
                                type={showPassword.old ? "text" : "password"}
                                id="Oldpassword"
                                autoComplete="old-password"
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
                                    },
                                    "& .MuiInputAdornment-root": {
                                        zIndex: 5,
                                    },
                                }}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Oldpassword}
                                error={
                                    formik.touched.Oldpassword && Boolean(formik.errors.Oldpassword)
                                }
                                helperText={formik.touched.Oldpassword && formik.errors.Oldpassword}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment className="eye_btn" position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword((prev) => ({ ...prev, old: !prev.old }))}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    edge="end"
                                                >
                                                    {showPassword.old ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </FormControl>

                        {/* New Password Field */}
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
                                type={showPassword.main ? "text" : "password"}
                                id="password"
                                autoComplete="new-password"
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
                                    },
                                    "& .MuiInputAdornment-root": {
                                        zIndex: 5,
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
                                                    onClick={() => setShowPassword((prev) => ({ ...prev, main: !prev.main }))}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    edge="end"
                                                >
                                                    {showPassword.main ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </FormControl>

                        {/* Confirm Password Field */}
                        <FormControl>
                            <FormLabel
                                htmlFor="ConfirmPassword"
                                sx={{
                                    mb: 0.5,
                                    fontWeight: "600",
                                    fontSize: "0.85rem",
                                    color: "#475569",
                                }}
                            >
                                Confirm Password
                            </FormLabel>
                            <TextField
                                name="ConfirmPassword"
                                placeholder="Confirm Password"
                                type={showPassword.confirm ? "text" : "password"}
                                id="ConfirmPassword"
                                autoComplete="new-Password"
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
                                    },
                                    "& .MuiInputAdornment-root": {
                                        zIndex: 5,
                                    },
                                }}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ConfirmPassword}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.ConfirmPassword)
                                }
                                helperText={
                                    formik.touched.password && formik.errors.ConfirmPassword
                                }
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment className="eye_btn" position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    edge="end"
                                                >
                                                    {showPassword.confirm ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </FormControl>

                        {/* Send In Button */}
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
                            Send
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </>
    );
}
