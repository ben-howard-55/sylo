import React from "react";
import { StyleSheet } from "react-native";
import numeral from "numeral";

import { Text, View } from "../components/Themed";

type props = {
  cap: number;
  fiat: string;
  volume: number;
  symbol: string;
};

export default function TokenInformation({ cap, fiat, volume, symbol }: props) {
  let mCap = numeral(cap).format("0,0.00");
  let vol = numeral(volume).format("0,0.00");

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Information</Text>
      <View style={styles.row}>
        <Text style={styles.info}>Symbol:</Text>
        <Text style={styles.value}>{symbol}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>Market Cap:</Text>
        <Text style={styles.value}>${mCap + " " + fiat}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>24h Volume:</Text>
        <Text style={styles.value}>${vol + " " + fiat}</Text>
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
    width: "100%",
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
