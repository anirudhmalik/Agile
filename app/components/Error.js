import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Error({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{"No Internet Connection"}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.light,
  },
});

export default Error;
