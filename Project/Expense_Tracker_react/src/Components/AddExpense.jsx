import React, { useEffect, useState } from "react";
import InputField from "./InputField";

import Button from "@mui/material/Button";
import SelectField from "./SelectField";
import { useDispatch } from "react-redux";
import { addExpenses, updateExpenses } from "../features/expenseSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { expenseSchema } from "../validation/expenseSchema";
import { useFormik } from "formik";

const initialValues = {
  title: "",
  amount: "",
  category: "",
  date: "",
}

function AddExpense() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const editData = location.state?.expense;

  // const handleCategoryChange = (event) => {
  //   setValue("category", event.target.value);
  // };

  useEffect(() => {
    if (editData) {
      setValues({
        title: editData.title,
        amount: editData.amount,
        category: editData.category,
        date: editData.date,
      });
    }
    }, [editData]);


 const { values, setValues, handleSubmit, handleChange, handleBlur, touched ,errors } = useFormik({
    initialValues,
    validationSchema: expenseSchema,
    onSubmit: (values, { resetForm }) => {
      if (editData) {
        dispatch(
          updateExpenses({
            id: editData.id,
            updatedata: values,
          })
        );
      }
      else {
        dispatch(addExpenses(values));
      }

      resetForm(); // reset form
      navigate("/expensesList");
    }
  });
  return (
    <div className="p-6 flex items-center justify-center mt-15">
      <div className="shadow-full">
        <h1 className="text-2xl font-bold mb-4">Add Expense</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-md"
        >
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
          <InputField
            label="Amount"
            type="number"
            placeholder="Enter the amount"
            name="amount"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.amount && Boolean(errors.amount)}
            helperText={touched.amount && errors.amount}
          />
          <SelectField
            label="Category"
            name="category"
            value={values.category}
            onChange={handleChange}
            options={[
              { value: "Food", label: "Food 🍔" },
              { value: "Travel", label: "Travel 🚗" },
              { value: "Shopping", label: "Shopping 🛍️" },
              { value: "Bills", label: "Bills 💡" },
            ]}
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

          <div className="mt-4">
            <Button variant="contained" color="success" type="submit" fullWidth>
              {editData ? "Update Expense" : " Add Expense"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
