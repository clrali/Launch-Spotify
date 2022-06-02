const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config()

// const serviceAccount = require("../permissions.json");

const app = initializeApp({
    "type": "service_account",
    "projectId": process.env.firebaseProjectId,
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": process.env.client_email,
    "client_id": process.env.firebase_client_id,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5fzp2%40spotifyproject-e0c88.iam.gserviceaccount.com"
  }
  );
const db = getFirestore(app);

module.exports = db;