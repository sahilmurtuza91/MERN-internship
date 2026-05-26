import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import moment from "moment";
import Button from "@mui/material/Button";
import SelectField from "./SelectField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Checkbox } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addTask, updateTask } from "../redux/taskSlice";
import { taskSchema } from "../Validation/taskSchema";
import { cancelNotification, scheduleNotification } from "../utils/scheduleNotification.js";

function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editTask = location.state?.editTask;
  const isEditMode = Boolean(editTask);
  const categories = useSelector((state) => state.settings.categories);

  const initialValues = {
    title: editTask?.title || "",
    category: editTask?.category || "",
    duration: editTask?.duration || "",
    date: editTask?.date || "",
    scheduledTime: editTask?.scheduledTime || "",
    complete: editTask?.complete || false,
  };

  const { values,
    setValues,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    handleChange,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: taskSchema,
    onSubmit: (values, { resetForm }) => {
      const taskWithTimeStamp = {
        ...values,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        completedAt: null,
      };
      if (isEditMode) {

        const updatedTask = {
          ...editTask,
          ...values,
        };
        cancelNotification(editTask.id);
        dispatch(updateTask(updatedTask));
        scheduleNotification(updatedTask);
      } else {

        dispatch(addTask(taskWithTimeStamp));

        scheduleNotification(taskWithTimeStamp);
      }

      resetForm();
      navigate("/app/tasks");
    },
  });

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${"/Images/backgroundImg.jpg"})` }}
    >
      <div className="p-6 flex items-center justify-center ">
        <div className="shadow-full bg-white p-6 border-none rounded-3xl text-while mt-10">


          <div className="flex items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-slate-500 hover:text-slate-800 transition-colors cursor-pointer active:scale-95 p-1 flex items-center justify-center rounded-lg hover:bg-slate-100"
            >
              <ArrowBackIcon sx={{ fontSize: 22 }} />
            </button>
            <h1 className="text-2xl font-bold flex items-center m-0 text-slate-900 select-none">
              {isEditMode ? "Edit" : "Add"}&nbsp;<span className="text-green-500">Task</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            <InputField
              label="Title"
              placeholder="Enter title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
            <SelectField
              label="Category"
              name="category"
              value={values.category}
              onChange={handleChange}
              options={categories.map((cat) => ({
                value: cat,
                label: cat,
              }))}
            />
            <InputField
              label="Duration"
              type="number"
              placeholder="Enter the Duration (min)"
              name="duration"
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.duration && Boolean(errors.duration)}
              helperText={touched.duration && errors.duration}
            />
            <InputField
              label="Schedule Time"
              type="datetime-local"
              name="scheduledTime"
              value={values.scheduledTime}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.scheduledTime && Boolean(errors.scheduledTime)}
              helperText={touched.scheduledTime && errors.scheduledTime}
            />
            <InputField
              label="Date"
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
            />

            <div className="flex items-center gap-2">
              <Checkbox
                name="complete"
                checked={values.complete}
                onChange={(e) =>
                  setValues({ ...values, complete: e.target.checked })
                }
                onBlur={handleBlur}
              />
              <label className="text-slate-700 font-medium select-none cursor-pointer">Complete</label>
            </div>

            <div className="mt-4">
              <Button
                variant="contained"
                color="success"
                type="submit"
                fullWidth
              >
                {isEditMode ? "Update Task" : "Add Task"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;