import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import colors from "../styles/colors";
import wateringImg from "../assets/watering.png";
import { Button } from "../components/Button";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title="Avançar" onPress={() => console.log("teste")} />
      <Button title="Voltar" onPress={() => console.log("teste")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    //marginTop: "10%",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: colors.heading,
    paddingHorizontal: 20,
  },
  image: {
    width: 292,
    height: 284,
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
