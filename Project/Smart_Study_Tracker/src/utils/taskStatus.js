import moment from "moment";
import { getTaskTimes } from "./timeEngine";

export const getTaskStatus = (task, now = moment()) => {

  const { startTime, endTime } = getTaskTimes(task);

  const isStarted = now.isSameOrAfter(startTime);
  const isLate = now.isAfter(endTime);

  if (!isStarted) {
    return {
      type: "Upcoming",
      message: `Starts at ${startTime.format("hh:mm A")}`
    };
  }

  if (task.complete) {

    const totalTime = moment(task.completedAt).diff(startTime, "minutes");

    const delay = Math.max(totalTime - task.duration, 0);

    return {
      type: "Completed",
      totalTime,
      delay,
      message:
        delay > 0
          ? `Completed late by ${delay} min`
          : "Completed on time"
    };
  }

  if (isLate) {

    const delay = now.diff(endTime, "minutes");

    return {
      type: "late",
      delay,
      message: `Delayed by ${delay} min`
    };
  }

  const progress =
    (now.diff(startTime, "minutes") / task.duration) * 100;

  return {
    type: "Running",
    progress: Math.min(progress, 100),
    message: `Running ${Math.floor(progress)}%`
  };
};