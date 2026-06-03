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
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

export default function ForgotPassword() {

    const Navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required!")
                .matches(
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    "Please enter a valid email address!",
                ),
        }),
        onSubmit: () => {
            Navigate("/verify-otp");
         },
    });

    return (
        <>
            <CssBaseline />
            <SignInContainer direction="column">
                <Card variant="outlined">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', mb: 1 }}>
                        <IconButton
                            onClick={() => Navigate('/')}
                           sx={{ 
                                position: 'absolute', 
                                left: 0, 
                                color: '#1d1d1d',
                                p: 0.5 
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: '1.4rem' }}/>
                        </IconButton>
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
                            Forgot Password
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </FormControl>

                        {/* Sign In Button */}
                        <Button
                            // onClick={() => {
                            //     Navigate("/verify-otp");
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
                            Send
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </>
    );
}
