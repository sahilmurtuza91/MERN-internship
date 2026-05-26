import * as Yup from "yup";

export const taskSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 character"),

  category: Yup.string().required("Category is required"),
  duration: Yup.number()
    .required("Duration is required")
    .typeError("Duration must be number")
    .positive("Durationmust be greater then 0"),
  scheduledTime: Yup.date()
    .required("Schedule time is required")
    .min(new Date(), "Time must be in the future"),
  date: Yup.string().required("Date is required"),
  complete: Yup.boolean(),
});
