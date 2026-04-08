import * as Yup from "yup"

export const expenseSchema = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 character"),
    amount: Yup.number()
        .required("Amount is required")
        .typeError("Amount must be number")
        .positive("Amount must be greater then 0"),
    category: Yup.string()
        .required("Category is required"),
    date: Yup.string()
        .required("Date is required")
});