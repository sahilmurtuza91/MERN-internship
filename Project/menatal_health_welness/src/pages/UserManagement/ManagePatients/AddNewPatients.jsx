import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    FormLabel,
    FormControl,
    TextField,
    Typography,
    styled,
    IconButton,
    Avatar,
    Tooltip,
    MenuItem,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const fomr_fields = [
    {
        name: "FullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter Full Name",
        validation: Yup.string()
            .min(3, "Minimum 3 characters required")
            .required("Name is required"),
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter Email",
        validation: Yup.string()
            .email("Please enter a valid email address!")
            .required("Email is required"),
    },
    {
        name: "Relationship",
        label: "Relationship",
        type: "text",
        placeholder: "Relationship",
        validation: Yup.string().required("Relationship is required"),
    },
    {
        name: "JoinDate",
        label: "Join Date",
        type: "date",
        validation: Yup.date().required("Join date is required"),
    },
    {
        name: "LastActive",
        label: "Last Active",
        type: "date",
        validation: Yup.date().required("Last active date is required"),
    },
    {
        name: "Status",
        label: "Status",
        type: "select",
        defaultValue: "Pending",
        options: ["Pending", "Verified", "Restricted"],
        validation: Yup.string().required("Status selection is required"),
    },
    {
        name: "Phone",
        label: "Phone",
        type: "number",
        placeholder: "Phone",
        validation: Yup.string()
            .min(10, "Minimum 10 digits required")
            .required("Phone number is required"),
    },
    {
        name: "Address",
        label: "Address",
        type: "text",
        placeholder: "Address",
        validation: Yup.string().required("Address is required"),
    },
    {
        name: "Notes",
        label: "Medical Notes",
        type: "text",
        placeholder: "Medical History Notes",
        validation: Yup.string().required("Medical notes are required"),
    },
];

const initialValues = {};
const validationObject = {};

fomr_fields.forEach((Field) => {
    initialValues[Field.name] = Field.defaultValue ? Field.defaultValue : "";
    validationObject[Field.name] = Field.validation;
});
const dynamicValidationSchema = Yup.object().shape(validationObject);

export default function AddNewPatients() {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [open, setOpen] = useState(false);
    const Navigate = useNavigate();

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

    const formik = useFormik({
        initialValues: { ...initialValues, image: null },
        validationSchema: dynamicValidationSchema,
        onSubmit: () => {
            setOpen(true);

            setTimeout(() => {
                setOpen(false);
                Navigate(-1);
            }, 2000);
        },
    });

    return (
        <Box
            sx={{
                px: 3,
                pt: 8,
                display: "flex",
                flexDirection: "column",
                gap: "25px",
            }}
        >
            {open && (
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    <Alert severity="success" variant="filled">
                        Patients added successfully!
                    </Alert>
                </Snackbar>
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 900, fontSize: "20px" }}>
                    Add Patient
                </Typography>

                <Button
                    onClick={() => Navigate(-1)}
                    sx={{
                        backgroundColor: "var(--c_primary)",
                        color: "white",
                        "&:hover": { backgroundColor: "var(--hover)" },
                    }}
                >
                    Back
                </Button>
            </Box>

            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: 3,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography sx={{ fontWeight: 200, fontSize: "15px" }}>
                    Image
                </Typography>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: "none" }}
                />

                <Tooltip title="Profile Picture">
                    <IconButton
                        onClick={handleImageClick}
                        sx={{
                            position: "relative",
                            width: 100,
                            height: 100,
                            backgroundColor: "#f0f2f5",
                            "&:hover": {
                                backgroundColor: "#e2e8f0",
                                "& .camera-overlay": { opacity: 1 },
                            },
                        }}
                    >
                        <Avatar
                            src={image || "../../static/images/user_placeholder.png"}
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
                                zIndex: 2,
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
                        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-4 ">
                            {/* NameField */}
                            {fomr_fields.map((field) => (
                                <FormControl key={field.name}>
                                    <FormLabel
                                        htmlFor={field.name}
                                        sx={{
                                            mb: 0.5,
                                            fontWeight: "600",
                                            fontSize: "0.85rem",
                                            color: "#475569",
                                        }}
                                    >
                                        {field.label}
                                    </FormLabel>
                                    <TextField
                                        select={field.type === "select"}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        type={field.type !== "select" ? field.type : "text"}
                                        id={field.name}
                                        autoComplete={field.name}
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
                                        value={formik.values[field.name]}
                                        error={
                                            formik.touched[field.name] &&
                                            Boolean(formik.errors[field.name])
                                        }
                                        helperText={
                                            formik.touched[field.name] && formik.errors[field.name]
                                        }
                                    >
                                        {field.type === "select" &&
                                            field.options?.map((opt) => (
                                                <MenuItem key={opt} value={opt}>
                                                    {opt}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </FormControl>
                            ))}
                        </Box>

                        {/* Save Button */}
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            disabled={!(formik.dirty && formik.isValid)}
                            sx={{
                                py: 1,
                                fontWeight: "bold",
                                borderRadius: "5px",
                                fontSize: "0.9rem",
                                textTransform: "none",
                                mt: 1,
                                backgroundColor: "var(--c_primary)",
                                width: "100px",
                            }}
                        >
                            + Save
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
