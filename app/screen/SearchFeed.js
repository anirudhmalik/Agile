import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBox2 from "../components/SearchBox2";
import Screen from "../components/Screen";
import colors from "../config/colors";
import SearchList from "../components/SearchList";
import handlerApi from "../api/handlerApi";

function SearchFeed({ route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getResult(route.params.text);
  }, []);
  const getResult = async (query) => {
    setLoading(true);
    console.log("getting data");
    const result = await handlerApi.getData("search", {
      term: query,
      country: "IN",
    });
    if (!result.ok) {
      console.log(result.problem);
      return;
    }
    setData(result.data.results);
    console.log("done");
    setLoading(false);
  };
  return (
    <Screen style={styles.container}>
      <SearchBox2 query={route.params.text} getResult={getResult}></SearchBox2>
      <SearchList data={data} loading={loading}></SearchList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default SearchFeed;
