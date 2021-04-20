import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Welcome } from "./src/pages/Welcome";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
  
  //Segura a splash screen até que as fontes sejam carregadas
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight, //Android only
  },
});
