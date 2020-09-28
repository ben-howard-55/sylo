import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import TrackerCard from "../components/TrackerCard";
import axios from "axios";
import timeENUM from "../constants/scale";

type JSON = {
  id: string;
  text: string;
  name: string;
  icon_address: string;
  symbol: string;
};

type props = {
  navigation: any;
  scale: timeENUM;
  search: string;
};

export default function GetTracker({ navigation, scale, search }: props) {
  const [cards, setCards] = useState<JSON[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let url =
      "https://assets-api.sylo.io/v2/all?take=50&blockchain=ethereum&search=" +
      search +
      "&has_history_only=true";
    if (search === "" || search === "all") {
      url = "https://assets-api.sylo.io/v2/all";
    }
    axios
      .get(url)
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error reading " + search + " all from API");
      });
  }, [search]);

  if (isLoading) {
    return (
      <View style={styles.cardHolder}>
        <Text style={{ textAlign: "center" }}>...Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.cardHolder}>
      {cards.map((token) => {
        return (
          <TrackerCard
            key={token.id}
            name={token.name}
            symbol={token.symbol}
            icon={token.icon_address}
            id={token.id}
            navigation={navigation}
            scale={scale}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cardHolder: {
    display: "flex",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
