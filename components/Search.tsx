import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { View } from "../components/Themed";

interface props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <TextInput
        placeholder="search"
        onChangeText={(text: string) => setSearch(text.toLowerCase())}
        style={{
          height: 24,
          width: 96,
          marginLeft: 8,
          marginRight: 8,
          borderBottomWidth: 2,
          borderBottomColor: "#8A96AA",
          color: "#8A96AA",
        }}
      />
      <Image
        style={{
          width: 24,
          height: 24,
        }}
        source={require("../assets/images/Vector.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
