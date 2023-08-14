import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "./Context";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBddpYylg0Fv18sFjTEmLFWOAwF3mz0saM",
  authDomain: "examensarbete-traningsap-52386.firebaseapp.com",
  projectId: "examensarbete-traningsap-52386",
  storageBucket: "examensarbete-traningsap-52386.appspot.com",
  messagingSenderId: "498499143769",
  appId: "1:498499143769:web:3be4cfaec11c2906a80948",
  measurementId: "G-K7Y073R1PN",
  //...
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  /*   var docRef = db.collection("Fitness").doc("KOIsJeJEY3j77sX6ti5W"); */

  async function getWorkouts(db) {
    const citiesCol = collection(db, "Fitness");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
    return cityList;
  }
  useEffect(() => {
    getWorkouts(db);
  }, []);

  const FitnessCards = async () => {
    try {
      const docRef = await addDoc(collection(db, "fitness"), {
        title: title,
        isChecked: false,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
