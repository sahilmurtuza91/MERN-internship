import moment from "moment";

export const getTaskTimes = (task)=>{
    const startTime = moment(task.scheduledTime);
    const endTime = moment(task.scheduledTime).add(task.duration, "minutes");
    
    return {startTime, endTime};
}