/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";
import { initializeApp } from "firebase-admin/app";

initializeApp();
exports.addmessage = onRequest(async (req, res) => {
  const number = Math.floor(Math.random() * 100);
  const original = number.toString();

  res.json({ result: `Random number is ${original}` });
});

/* firebase functions:config:set mixpanel.api_key="85e826ac0fd9c22738774a63ba6bd839"
 */

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
