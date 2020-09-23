import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function SearchCard({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: item.artworkUrl100 }} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.collectionCensoredName}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {item.collectionArtistName}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <MaterialCommunityIcons
          name={"dots-vertical"}
          size={40}
          color={colors.medium}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 105,
    width: "100%",
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 18,
    borderRadius: 8,
  },
  rightContainer: {
    height: "100%",
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  subTitle: {
    fontSize: 14,
    width: 200,
    color: colors.medium,
  },
  title: {
    fontSize: 16,
    width: 200,
    color: colors.dark,
  },
  textContainer: {
    marginLeft: 8,
  },
});

export default SearchCard;
