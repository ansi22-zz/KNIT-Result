/* eslint-disable */
import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Per(props) {
  console.log(props.data.length);
  let x = "";
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i]["Percentage"] != null) {
      if (props.data[i]["Percentage"] != null) {
        x = props.data[i]["Percentage"].toString();
      }
    }
  }
  console.log(x);
  const chartData = [
    {
      label: "",
      value: x,
    },
  ];
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "30%",
    boxShadow: "5px 10px",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Cumulative Percentage Plot ",
        yAxisName: "Percentage",
        theme: "fusion",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default Per;
