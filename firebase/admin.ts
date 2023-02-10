const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personalized-engine-default-rtdb.firebaseio.com",
});

export const firestore = admin.firestore();
