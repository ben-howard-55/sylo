import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View, BoldText } from "../components/Themed";
import numeral from "numeral";

type baseCardProps = {
  rate: number;
  name: string;
  crypto: number;
  icon_address: string;
};

export default function BaseCard({
  rate,
  name,
  crypto,
  icon_address,
}: baseCardProps) {
  // if negative growth show red
  let cryptoType = styles.cryptoGreen;
  if (crypto < 0) {
    cryptoType = styles.cryptoRed;
  }
  let cRate = numeral(rate).format("0,0.0000");

  return (
    <View style={styles.base}>
      <View style={styles.leftBase}>
        <Image
          style={styles.icon}
          width={36}
          height={36}
          source={{ uri: icon_address }}
        />
        <BoldText style={styles.name}>{name}</BoldText>
      </View>
      <View style={styles.rightBase}>
        <BoldText style={styles.fiat}>${cRate}</BoldText>

        <BoldText style={cryptoType}>
          {(crypto / rate).toFixed(2)}% (${crypto.toFixed(4)})
        </BoldText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  cryptoGreen: {
    display: "flex",
    textAlign: "right",
    paddingRight: 12,
    fontSize: 12,
    lineHeight: 18,
    color: "#33BB5D",
  },
  cryptoRed: {
    display: "flex",
    textAlign: "right",
    paddingRight: 15,
    fontSize: 12,
    lineHeight: 18,
    color: "red",
  },
  fiat: {
    display: "flex",
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "right",
    color: "#495162",
  },
  name: {
    display: "flex",
    alignSelf: "flex-start",
    paddingLeft: 12,
    paddingTop: 18,
    fontSize: 15,
    lineHeight: 18,
    color: "#495162",
  },
  icon: {
    width: 36,
    height: 26,
    marginLeft: 14,
    marginTop: 11,
    marginBottom: 9,
  },
  leftBase: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignContent: "center",
  },
  rightBase: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
