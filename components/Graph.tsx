import React from "react";
import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

type graphProps = {
  data: number[];
};

export default function Graph({ data }: graphProps) {
  // stylistic
  let graphData = [];
  for (let i = 0; i < data.length / 5; i++) {
    graphData.push(data[i * 5]);
  }

  return (
    <LineChart
      style={{ width: "100%", height: 66 }}
      data={graphData}
      svg={{ stroke: "#F15A29", strokeWidth: 3, strokeOpacity: 0.6 }}
      curve={shape.curveBasis}
      contentInset={{ top: 5, bottom: 5, left: 0, right: 0 }}
    ></LineChart>
  );
}
