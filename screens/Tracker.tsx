import * as React from "react";
import { StyleSheet, Button, Image } from "react-native";

import { Text, View } from "../components/Themed";
import GetTracker from "../components/GetTracker";
import { ScrollView } from "react-native-gesture-handler";
import TimeControl from "../components/TimeControl";
import { useState } from "react";
import timeENUM from "../constants/scale";
import Search from "../components/Search";

export default function Tracker(props: any) {
  const [scale, setScale] = useState<timeENUM>(timeENUM.MONTH);
  const [search, setSearch] = useState<string>("all");

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.title}>
          <View style={{ flex: 1 }}></View>
          <View style={styles.titleTextBox}>
            <Text style={styles.titleText}>Tracker</Text>
          </View>
          <View style={styles.search}>
            <Search search={search} setSearch={setSearch} />
          </View>
        </View>
        <TimeControl scale={scale} setScale={setScale} />
        <GetTracker
          navigation={props.navigation}
          scale={scale}
          search={search}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 43,
    height: 65,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
  },
  titleTextBox: {
    flex: 1,
    justifyContent: "center",
  },
  search: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
});
