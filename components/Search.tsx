import * as React from "react";
import { Pressable, StyleSheet, Image, TextInput } from "react-native";
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
        marginRight: 16,
      }}
    >
      <TextInput
        placeholder="search"
        onChangeText={(text: string) => setSearch(text.toLowerCase())}
        style={{ width: "40%", paddingRight: 10, height: 24 }}
      />
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
  );
}

const styles = StyleSheet.create({});
