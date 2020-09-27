import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function TokenInformation() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Information</Text>
      <View style={styles.row}>
        <Text style={styles.info}>Symbol:</Text>
        <Text style={styles.value}>$123</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>Market Cap:</Text>
        <Text style={styles.value}>$123</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>24h Volume:</Text>
        <Text style={styles.value}>$123</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    // font-family: RawlineMedium;
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    color: "#495162",
    paddingBottom: 12,
  },
  info: {
    // font-family: RawlineMedium;
    fontSize: 15,
    lineHeight: 21,
    color: "#8A96AA",
    width: 87,
  },
  main: {
    display: "flex",
    alignItems: "center",
    width: 307,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  value: {
    paddingLeft: 15,
    // font-family: RawlineMedium;
    fontSize: 15,
    lineHeight: 21,
    color: "#8A96AA",
  },
});
