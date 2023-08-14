import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

// Konfiguration och initialisering av Firebase:
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

// Deklaration och användning av `FitnessCards`-komponenten:
const FitnessCards = () => {
  const [workouts, setWorkouts] = useState([]);

  async function getWorkouts(db) {
    const fit = collection(db, "fitness");
    const fitSnapshot = await getDocs(fit);
    const fitList = fitSnapshot.docs.map((doc) => doc.data());

    setWorkouts(fitList[0].fitness);
  }
  useEffect(() => {
    getWorkouts(db);
  }, []);

  // Renderingslogik: Används som en container för att rymma alla träningskort.
  const navigation = useNavigation();
  return (
    <View>
      {workouts.length !== 0 &&
        workouts.map((item, key) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Workout", {
                image: item.image,
                excersises: item.excersises,
                id: item.id,
              })
            }
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
            }}
            key={key}
          >
            <Image
              style={{ width: "95%", height: 140, borderRadius: 7 }}
              source={{ uri: item.image }}
            />
            <Text
              style={{
                position: "absolute",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                left: 20,
                top: 20,
              }}
            >
              {item.name}
            </Text>
            <MaterialCommunityIcons
              style={{
                position: "absolute",
                color: "white",
                bottom: 15,
                left: 20,
              }}
              name="lightning-bolt"
              size={24}
              color="black"
            />
          </Pressable>
        ))}
      {workouts.length === 0 && <Text>No data</Text>}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
