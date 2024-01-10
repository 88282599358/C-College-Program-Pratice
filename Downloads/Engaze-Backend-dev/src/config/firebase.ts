import firebaseAdmin from "firebase-admin";
import { applicationDefault, initializeApp } from "firebase-admin/app";

const serviceAccount = {};

export const firebaseInitializer = () => {
  if (!process.env.FIREBASE_PROJECT_ID) {
    console.log("FIREBASE_CONFIG :: firebase projectId is missing");
    return process.exit(1);
  }
  initializeApp({
    credential: applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
};
