import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import timeENUM from "../constants/scale";

interface props {
  scale: timeENUM;
  setScale: React.Dispatch<React.SetStateAction<timeENUM>>;
}

export default function TimeControl({ scale, setScale }: props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
      }}
    >
      <Pressable onPress={() => setScale(timeENUM.ALL)}>
        <Text
          style={{
            ...styles.time,
            ...(scale === timeENUM.ALL ? styles.colored : {}),
          }}
        >
          all
        </Text>
      </Pressable>

      <Pressable onPress={() => setScale(timeENUM.YEAR)}>
        <Text
          style={{
            ...styles.time,
            ...(scale === timeENUM.YEAR ? styles.colored : {}),
          }}
        >
          year
        </Text>
      </Pressable>

      <Pressable onPress={() => setScale(timeENUM.MONTH)}>
        <Text
          style={{
            ...styles.time,
            ...(scale === timeENUM.MONTH ? styles.colored : {}),
          }}
        >
          month
        </Text>
      </Pressable>

      <Pressable onPress={() => setScale(timeENUM.WEEK)}>
        <Text
          style={{
            ...styles.time,
            ...(scale === timeENUM.WEEK ? styles.colored : {}),
          }}
        >
          week
        </Text>
      </Pressable>

      <Pressable onPress={() => setScale(timeENUM.DAY)}>
        <Text
          style={{
            ...styles.time,
            ...(scale === timeENUM.DAY ? styles.colored : {}),
          }}
        >
          day
        </Text>
      </Pressable>
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
  colored: {
    color: "#F15A29",
  },
});
