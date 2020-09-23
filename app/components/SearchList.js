import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SearchCard from "./SearchCard";
import AppText from "./AppText";
import colors from "../config/colors";
import ActivityIndicator from "./ActivityIndicator";

function SearchList({ data, loading }) {
  return (
    <>
      {loading ? (
        <ActivityIndicator visible={loading}></ActivityIndicator>
      ) : (
        <>
          <View style={styles.container}>
            <AppText style={styles.text}>{"Top Result"}</AppText>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.length > 0 ? (
              data.map((item) => (
                <SearchCard key={item.trackId} item={item}></SearchCard>
              ))
            ) : (
              <AppText style={styles.text}>
                {"Sorry, Nothing Matched your Query"}
              </AppText>
            )}
            <View style={styles.bottom}></View>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 250,
    alignItems: "center",
  },
  container: {
    height: 40,
    justifyContent: "center",
    marginLeft: 18,
  },
  text: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default SearchList;
