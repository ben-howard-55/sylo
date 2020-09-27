import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import TrackerCard from "../components/TrackerCard";
import axios from "axios";

type JSON = {
  id: string;
  text: string;
  name: string;
  icon_address: string;
};

export default function GetTracker() {
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
        console.log(token.id);
        return (
          <TrackerCard
            key={token.id}
            name={token.name}
            icon={token.icon_address}
            id={token.id}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cardHolder: {
    display: "flex",
    paddingTop: 36,
    flex: 527,
  },
});
