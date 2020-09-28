import React from "react";
import { AreaChart, LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Svg, {
  Stop,
  LinearGradient,
  Defs,
  Path,
  Mask,
  Line,
} from "react-native-svg";
import { View } from "./Themed";
import { StyleSheet } from "react-native";

type graphProps = {
  data: number[];
};

export default function LargeGraph({ data }: graphProps) {
  // stylistic
  let graphData = [];
  for (let i = 0; i < data.length / 5; i++) {
    graphData.push(data[i * 5]);
  }

  return (
    <View>
      <LineChart
        style={{
          height: 110,
          width: "100%",
          position: "absolute",
          paddingBottom: 5,
        }}
        data={graphData}
        contentInset={{ top: 5, bottom: 5 }}
        curve={shape.curveBasis}
        svg={{
          stroke: "#F15A29",
          strokeWidth: 3,
          strokeOpacity: 0.6,
        }}
      />
      <AreaChart
        style={{ height: 110, width: "100%", paddingBottom: 5 }}
        data={graphData}
        contentInset={{ top: 5, bottom: 5 }}
        curve={shape.curveBasis}
        svg={{
          fill: "url(#grad1)",
          fillOpacity: 0.2,
        }}
      >
        <Defs>
          <LinearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#F15A29" stopOpacity={1} />
            <Stop offset="23%" stopColor="white" stopOpacity={1} />
          </LinearGradient>
        </Defs>
      </AreaChart>
    </View>
  );
}
