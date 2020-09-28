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
};

export default function GetTracker({ navigation, scale }: props) {
  const [cards, setCards] = useState<JSON[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://assets-api.sylo.io/v2/all")
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error reading all from API");
      });
  }, []);

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
