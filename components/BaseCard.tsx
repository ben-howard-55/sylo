import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

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

  return (
    <View style={styles.base}>
      <View style={styles.leftBase}>
        <Image
          style={styles.icon}
          width={36}
          height={36}
          source={{ uri: icon_address }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.rightBase}>
        <Text style={styles.fiat}>${rate.toFixed(4)}</Text>

        <Text style={cryptoType}>
          {(crypto / rate).toFixed(2)}% (${crypto.toFixed(4)})
        </Text>
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
