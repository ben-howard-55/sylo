import * as React from "react";
import { StyleSheet } from "react-native";
import TokenCard from "../components/TokenCard";

import { Text, View } from "../components/Themed";
import TimeControl from "../components/TimeControl";
import TokenInformation from "../components/TokenInformation";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {/* <Image/> */}
        <Text style={styles.titleText}>Sylo</Text>
      </View>
      <TimeControl />
      <TokenCard
        id={"0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4:mainnet:ethereum"}
        name={"Sylo"}
        icon={"hmm"}
      />
      <View style={styles.tokenInfo}>
        <TokenInformation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "#495162",
    // fontFamily: "RawlineMedium",
    fontSize: 18,
    lineHeight: 21,
  },
  title: {
    display: "flex",
    paddingTop: 59,
    paddingBottom: 19,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  tokenInfo: {
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
  },
});
