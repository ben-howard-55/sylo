import * as React from "react";
import { StyleSheet, Button, Image } from "react-native";

import { Text, View } from "../components/Themed";
import GetTracker from "../components/GetTracker";
import { ScrollView } from "react-native-gesture-handler";
import TimeControl from "../components/TimeControl";

export default function Tracker() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Tracker</Text>
          <View style={styles.aux}>
            <Image
              style={{
                marginRight: 15,
                marginTop: 22,
                marginBottom: 19,
                width: 24,
                height: 24,
              }}
              source={require("../assets/images/Vector.png")}
            />
          </View>
        </View>
        <TimeControl />
        <GetTracker />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // title css
  title: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  aux: {
    flex: 1,
    alignItems: "flex-end",
    height: "100%",
    backgroundColor: "blue",
  },
  titleText: {
    width: "100%",
    // fontFamily: "RawlineMedium",
    fontSize: 18,
    lineHeight: 21,
    paddingTop: 22,
    paddingBottom: 19,
    textAlign: "center",
    color: "#495162",
  },
  search: {
    alignItems: "flex-end",
    color: "#495162",
    width: 24,
    height: 24,
    paddingRight: 15,
  },
  // time controls
  timeControls: {
    backgroundColor: "black",
    flex: 21,
  },
});
