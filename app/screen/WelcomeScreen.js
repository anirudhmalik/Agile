import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBox from "../components/SearchBox";
import Screen from "../components/Screen";
import AppLogo from "../components/AppLogo";
function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppLogo></AppLogo>
      <SearchBox navigation={navigation}></SearchBox>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
