import { getMessaging } from "firebase-admin/messaging";

const sendFirebaseMessage = (title: string, body: string, token: string) => {
  const message = {
    notification: {
      title,
      body,
    },
    token,
  };

  getMessaging()
    .send(message)
    .then((response) => console.log("FIREBASE_MESSAGE :: SENT ::", response))
    .catch((error: Error) =>
      console.error("FIREBASE_MESSAGE :: ERR ::", error),
    );
};

export default sendFirebaseMessage;
