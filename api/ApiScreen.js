import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ApiScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);

  const [quote, setQuote] = useState("");
  useEffect(() => {
    const url =
      "https://workout-planner1.p.rapidapi.com/customized?time=30&equipment=dumbbells&muscle=biceps&fitness_level=beginner&fitness_goals=strength";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "42937fc287msh15fb5ae1f18eb8dp17eecajsne84bf69ea83c",
        "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setQuote(JSON.stringify(data)))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      <Text>{quote}</Text>
    </View>
  );
};

export default ApiScreen;

const styles = StyleSheet.create({});
