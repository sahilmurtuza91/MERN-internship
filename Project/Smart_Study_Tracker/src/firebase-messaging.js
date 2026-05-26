import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

export const requestPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BAkhxePL1rDMu7A78GF4uQn3l0kSI5Pu3s6aq1EJbrGkJltVEPD9TdGIyvrM9B-f76S78-SgPiC_qZYEw-C-BZU",
    });

    console.log("Token:", token);
  }
};

// foreground notification listener
export const listenNotification = () => {
  onMessage(messaging, (payload) => {
    new Notification(payload?.notification?.title, {
      body: payload?.notification?.body,
      icon: "/logo192.png",
    });
  });
};
