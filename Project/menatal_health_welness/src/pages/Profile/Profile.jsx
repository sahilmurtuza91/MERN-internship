import React, { useRef, useState } from 'react'
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
  Avatar,
  Tooltip,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MuiCard from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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


export default function Profile() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // console.log("Selected file:", file);
      formik.setFieldValue("image", file);
      setImage(URL.createObjectURL(file));

    }
  };

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      FullName: "",
      email: "",
      image:null,
    },
    validationSchema: Yup.object({
      FullName: Yup.string()
        .min(3, "minimum 3 chnaracter is required"),
      email: Yup.string()
        .matches(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          "Please enter a valid email address!",
        ),
    }),
    onSubmit: () => {
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
        Navigate("/dashboard");
      }, 2000);

    },
  });

  return (

    <Box sx={{ px: 3, pt: 8, display: "flex", flexDirection: "column", gap: "25px" }}>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" variant="filled">
            Profile updated successfully!
          </Alert>
        </Snackbar>
      )}

      <Typography sx={{ fontWeight: 900, fontSize: "20px", }}>
        Edit Profile
      </Typography>

      <Box sx={{ backgroundColor: "white", borderRadius: "10px", padding: 3, display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontWeight: 200, fontSize: "15px" }}>Image</Typography>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />


        <Tooltip title="Change Profile Picture">
          <IconButton
            onClick={handleImageClick}
            sx={{
              position: "relative",
              width: 100,
              height: 100,
              backgroundColor: "#f0f2f5",
              "&:hover": {
                backgroundColor: "#e2e8f0",
                "& .camera-overlay": { opacity: 1 }
              },
            }}
          >

            <Avatar
              src={image || "../static/images/user_placeholder.png"}
              alt="Profile"
              sx={{ width: "100%", height: "100%", position: "absolute" }}
            />


            <Box
              className="camera-overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
                zIndex: 2
              }}
            >
              <PhotoCameraIcon sx={{ fontSize: "1.8rem" }} />
            </Box>
          </IconButton>
        </Tooltip>

        <Box>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",

            }}
          >

            <Box className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
              {/* NameField */}
              <FormControl>
                <FormLabel
                  htmlFor="FullName"
                  sx={{
                    mb: 0.5,
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    color: "#475569",
                  }}
                >
                  Full Name
                </FormLabel>
                <TextField
                  name="FullName"
                  placeholder="Full Name"
                  type="text"
                  id="FullName"
                  autoComplete="FullName"
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
                  value={formik.values.FullName}
                  error={
                    formik.touched.FullName &&
                    Boolean(formik.errors.FullName)
                  }
                  helperText={
                    formik.touched.FullName &&
                    formik.errors.FullName
                  }
                />
              </FormControl>

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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
            </Box>


            {/* Sign In Button */}
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              disabled={!formik.dirty}
              sx={{
                py: 1,
                fontWeight: "bold",
                borderRadius: "5px",
                fontSize: "0.9rem",
                textTransform: "none",
                mt: 1,
                backgroundColor: "var(--c_primary)",
                width: "100px"
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}