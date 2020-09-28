import React from "react";
import { Pressable, StyleSheet } from "react-native";
import axios from "axios";

import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import BaseCard from "./BaseCard";
import timeENUM from "../constants/scale";

type CardProps = {
  id: string;
  name: string;
  icon: string;
  navigation: any;
  symbol: string;
  scale: timeENUM;
};

type JSONa = {
  rate: number;
  history: history[];
};

type history = {
  rate: number;
  market_cap: number;
  volume_24h: number;
  date: number;
  seq_no: number;
};

export default function TrackerCard({
  name,
  icon,
  id,
  symbol,
  navigation,
  scale,
}: CardProps) {
  let fiat = "USD";
  let period = scale.toString();
  let type = "historic";

  const [graphData, setGraphData] = useState<number[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [closingFiat, setClosingFiat] = useState<number>(0);
  const [openingFiat, setOpeningFiat] = useState<number>(0);

  useEffect(() => {
    axios
      .get(
        "https://assets-api.sylo.io/v2/asset/id/" +
          id +
          "/rate?fiat=" +
          fiat +
          "&period=" +
          period +
          "&type=" +
          type
      )
      .then((response) => {
        // not sure on how much detail is wanted in the graph
        let datas = response.data.history.map((v: any, i: any) => v.rate);
        datas.push(response.data.rate);
        setGraphData(datas);
        setOpeningFiat(response.data.history[0].rate);
        setClosingFiat(response.data.rate);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error calling " + name + " from API");
        console.log(error);
      });
  }, [scale]);

  if (isLoading) {
    return (
      <View style={styles.bg}>
        <Text style={{ textAlign: "center" }}>...Loading</Text>
      </View>
    );
  }
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("TrackerToken", {
          id: id,
          icon: icon,
          name: name,
          symbol: symbol,
        })
      }
    >
      <View style={styles.bg}>
        <View style={styles.base}>
          <BaseCard
            name={name}
            icon_address={icon}
            rate={closingFiat}
            crypto={closingFiat - openingFiat}
          />
        </View>
        <View style={styles.chart}>
          <Graph data={graphData} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bg: {
    display: "flex",
    width: "100%",
    height: 140,
    borderWidth: 2,
    borderColor: "#F6F6F6",
    borderStyle: "solid",
    borderRadius: 15,
    marginTop: 16,
  },
  chart: {
    // flex: 84,
    backgroundColor: "transparent",
    paddingBottom: 12,
  },
  base: {
    width: "100%",
    display: "flex",
    backgroundColor: "transparent",
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});
