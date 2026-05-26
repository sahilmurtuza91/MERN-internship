const activeNotifications = {};
export const scheduleNotification = (task) => {
    const rawTime = task.scheduledTime || task.time;
    if (!rawTime || !task.id) return;

    const taskTime = new Date(rawTime).getTime();
    const notificationTime = taskTime - 1* 60 * 1000; 
    const currentTime = Date.now();
    
    if (taskTime <= currentTime) return;

    if (activeNotifications[task.id]) {
        clearTimeout(activeNotifications[task.id]);
    }

    if (currentTime >= notificationTime && currentTime < taskTime) {
        new Notification("⏰ Task Reminder", {
            body: `${task.title} is starting right now!`,
            icon: "/logo192.png",
        });
        return;
    }

    const delay = notificationTime - currentTime;
    if (delay > 0) {
        console.log(`Notification scheduled for Task ID: ${task.id}`);
        
        const timerId = setTimeout(() => {
            new Notification("⏰ Task Reminder", {
                body: `${task.title} starts in 1 minute!`,
                icon: "/logo192.png",
            });
            delete activeNotifications[task.id];
        }, delay);
        activeNotifications[task.id] = timerId;
    }
};

export const cancelNotification = (taskId) => {
    if (activeNotifications[taskId]) {
        clearTimeout(activeNotifications[taskId]); 
        delete activeNotifications[taskId]; 
        console.log(`Notification cancelled successfully for Task ID: ${taskId}`);
    }
};