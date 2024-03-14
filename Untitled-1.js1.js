// Initialize Firebase
const firebase = require("firebase");
require("firebase/database");

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Write data to the database
database.ref('users').set({
  John: {
    age: 30
  },
  Jane: {
    age: 25
  }
});

// Read data from the database
database.ref('users').once('value', (snapshot) => {
  console.log(snapshot.val());
});
