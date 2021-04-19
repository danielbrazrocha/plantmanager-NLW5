import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";

//A interface cria uma regra de utilização do componente, tipando-a
//Precisamos extender as propriedades do TouchableOpacity para usar o onPress
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
