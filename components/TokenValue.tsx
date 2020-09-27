import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import numeral from "numeral";

type tokenValueProps = {
  rate: number;
  crypto: number;
};

export default function TokenValue({ rate, crypto }: tokenValueProps) {
  let cRate = numeral(rate).format("0,0.0000");

  let cryptoType = styles.cryptoGreen;
  if (crypto < 0) {
    cryptoType = styles.cryptoRed;
  }

  return (
    <View style={styles.base}>
      <Text style={styles.fiat}>${cRate}</Text>
      <Text style={cryptoType}>
        {(crypto / rate).toFixed(2)}% (${crypto.toFixed(4)})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    display: "flex",
    backgroundColor: "transparent",
  },
  cryptoGreen: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
    color: "#33BB5D",
    paddingBottom: 13,
  },
  cryptoRed: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
    color: "red",
    paddingBottom: 13,
  },
  fiat: {
    display: "flex",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#495162",
    paddingTop: 12,
  },
});
