import React from "react";
import { StyleSheet } from "react-native";
import axios from "axios";

import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";
import TokenValue from "./TokenValue";
import LargeGraph from "./Largegraph";
import TokenInformation from "./TokenInformation";
import timeENUM from "../constants/scale";

type CardProps = {
  id: string;
  symbol: string;
  scale: timeENUM;
};

type JSONa = {
  rate: number;
  history: history[];
  fiat_symbol: number;
  volume_24h: number;
};

type history = {
  rate: number;
  market_cap: number;
  volume_24h: number;
  date: number;
  seq_no: number;
};

export default function TokenCard({ id, symbol, scale }: CardProps) {
  let fiat = "USD";
  let period = scale.toString();
  let type = "historic";

  const [graphData, setGraphData] = useState<number[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [closingFiat, setClosingFiat] = useState<number>(0);
  const [openingFiat, setOpeningFiat] = useState<number>(0);
  const [cap, setCap] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [fiatSymbol, setFiatSymbol] = useState<string>("USD");

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
        setCap(response.data.market_cap);
        setFiatSymbol(response.data.fiat_symbol);
        setVolume(response.data.volume_24h);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error calling selected coin from API");
      });
  }, [scale]);

  if (isLoading) {
    return (
      <View style={styles.bg}>
        <Text style={{ textAlign: "center" }}>...Loading</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <View style={styles.base}>
          <TokenValue rate={closingFiat} crypto={closingFiat - openingFiat} />
        </View>
        <View style={styles.chart}>
          <LargeGraph data={graphData} />
        </View>
      </View>
      <View style={styles.tokenInfo}>
        <TokenInformation
          cap={cap}
          fiat={fiatSymbol}
          symbol={symbol}
          volume={volume}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    display: "flex",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    height: 199,
    marginTop: 24,
    backgroundColor: "transparent",
  },
  tokenInfo: {
    paddingTop: 30,
    display: "flex",
    alignItems: "center",
  },
  chart: {
    display: "flex",
    backgroundColor: "transparent",
  },
  base: {
    display: "flex",
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingRight: 20,
  },
  card: {
    borderColor: "#F6F6F6",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 15,
  },
});
