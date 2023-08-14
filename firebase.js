// Gone add my code here!
/* import * as firebase from "firebase"; */
import { initializeApp } from "firebase/app";
/* import "firebase/firestore"; */
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBsp1kn1fm1Yq9HdyV4iEgZFJYNdFlFtbY",
  authDomain: "social-media-dev-db845.firebaseapp.com",
  projectId: "social-media-dev-db845",
  storageBucket: "social-media-dev-db845.appspot.com",
  messagingSenderId: "379640171639",
  appId: "1:379640171639:web:6f41b2190d33766ddc0a72",
  //...
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
