/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// maybe useful
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true }); // Allow CORS for all origins
admin.initializeApp();
const db = admin.firestore();

// GET request
exports.getData = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
      }

      const snapshot = await db.collection("data").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});

// POST request
exports.addData = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
      }

      const newData = req.body;
      const docRef = await db.collection("data").add(newData);
      const addedData = { id: docRef.id, ...newData };
      res.status(201).json(addedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});
