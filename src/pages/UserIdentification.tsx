import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  // usamos o <string> para tipar no TypeScript, já que os estado foi criado vazio. Nos anteriores, como temos
  // valores padrão, não é necessário, pois o tipo é determinado no estado padrão setado
  const [name, setName] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      {/* KeyboardAvoidingView tem de envelopar todo o conteúdo que está o input */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform == "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            {/* A View Header é para envelopar o conteúdo que será movimentado com o KeyboardAvoidingView
            Não se pode deixar elementos soltos, caso contrário irá piorar a experiencia do usuário */}
            <View style={styles.header}>
              <Text style={styles.emoji}> {name ? "🥰" : "😃"} </Text>
              <Text style={styles.title}>Como podemos{"\n"} chamar você?</Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || name) && {
                  borderColor: colors.green,
                  borderBottomWidth: 2,
                },
              ]}
              placeholder="digite seu nome"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={(text) => setName(text)}
              value={name}
            ></TextInput>
            <View style={styles.footer}>
              <Button />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
    //alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    alignSelf: "center",
    textAlign: "center",
    //backgroundColor: "red",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
