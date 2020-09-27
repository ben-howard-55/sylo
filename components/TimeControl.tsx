import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function TimeControl() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: 336,
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.time}>all</Text>
      <Text style={styles.time}>year</Text>
      <Text style={styles.time}>month</Text>
      <Text style={styles.time}>week</Text>
      <Text style={styles.time}>day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    // fontFamily: "RawlineMedium",
    color: "#8A96AA",
    fontSize: 15,
    lineHeight: 21,
    justifyContent: "space-between",
  },
});
