import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import { Welcome } from "./src/pages/Welcome";

export default function App() {
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
