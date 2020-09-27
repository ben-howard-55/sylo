import React from "react";
import { AreaChart, LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Svg, { Stop, LinearGradient, Defs, Path } from "react-native-svg";
import { View } from "react-native";

type graphProps = {
  data: number[];
};

const Gradient = () => (
  <Defs>
    <LinearGradient id="Gradient" x1={"0%"} y1={"100%"} x2={"0%"} y2={"0%"}>
      <Stop offset={"0%"} stopColor={"#F15A29"} />
      <Stop offset={"100%"} stopColor={"white"} />
    </LinearGradient>
  </Defs>
);

export default function LargeGraph({ data }: graphProps) {
  // stylistic
  let graphData = [];
  for (let i = 0; i < data.length / 5; i++) {
    graphData.push(data[i * 5]);
  }

  const Gradient = () => (
    <Defs key={"defs"}>
      <LinearGradient
        id={"gradient"}
        x1={"100%"}
        y1={"100%"}
        x2={"100%"}
        y2={"100%"}
      >
        <Stop offset={"0%"} stopColor={"rgba(241, 90, 41)"} stopOpacity={1} />
        <Stop
          offset={"10%"}
          stopColor={"rgba(241, 90, 41)"}
          stopOpacity={0.8}
        />
        <Stop
          offset={"50%"}
          stopColor={"rgba(241, 90, 41)"}
          stopOpacity={0.4}
        />
      </LinearGradient>
    </Defs>
  );

  return (
    <View
      style={
        {
          // backgroundColor: "red",
          //   "linearGradient(180deg, #F15A29 0%, rgba(241, 90, 41, 0) 100%)",
        }
      }
    >
      <LineChart
        style={{ height: 117, width: "100%" }}
        data={graphData}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveBasis}
        svg={{
          stroke: "#F15A29",
          strokeWidth: 3,
          strokeOpacity: 0.6,
        }}
      ></LineChart>
    </View>
  );
}
