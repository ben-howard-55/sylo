import * as React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import TokenCard from "../components/TokenCard";

import { Text, View } from "../components/Themed";
import TimeControl from "../components/TimeControl";
import timeENUM from "../constants/scale";
import { useState } from "react";

type props = {
  navigation: any;
  route: any;
};

export default function TrackerToken({ route, navigation }: props) {
  const [scale, setScale] = useState<timeENUM>(timeENUM.WEEK);
  const { id, icon, name, symbol } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Pressable onPress={() => navigation.navigate("Tracker")}>
          <View
            style={{
              width: 48,
              height: 65,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/images/BackVector.png")} />
          </View>
        </Pressable>
        <View
          style={{
            paddingLeft: 100,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              marginRight: 12,
            }}
            source={{ uri: icon }}
          />
          <Text style={styles.titleText}>{name}</Text>
        </View>
      </View>
      <TimeControl scale={scale} setScale={setScale} />
      <TokenCard id={id} symbol={symbol} scale={scale} />
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
    textAlign: "center",
  },
  title: {
    display: "flex",
    paddingTop: 43,
    width: "100%",
    flexDirection: "row",
  },
});
