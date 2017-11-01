import * as firebase from "firebase"

const config = {
    apiKey: "AIzaSyCKxcYgekzH4pstawMNXoYUdBCJ1Frvcac",
    authDomain: "corvies-d6358.firebaseapp.com",
    databaseURL: "https://corvies-d6358.firebaseio.com",
    projectId: "corvies-d6358",
    storageBucket: "corvies-d6358.appspot.com",
    messagingSenderId: "401142538667"
};

export const firebaseApp = firebase.initializeApp(config)
export const db = firebase.database()
export const reviewRef = db.ref("reviews")