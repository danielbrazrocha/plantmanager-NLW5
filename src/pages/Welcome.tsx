import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import colors from "../styles/colors";
import wateringImg from "../assets/watering.png";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} resizeMode="contain" />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>></Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: "5%",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: colors.heading,
    paddingHorizontal: 20,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    alignItems: "center",
    borderRadius: 16,
    marginBottom: "5%",
    width: 56,
    height: 56,
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
  },
});
