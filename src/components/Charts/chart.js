/* eslint-disable */
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Chart(props) {
  console.log(props.data.length);

  const a = ["", "", "", ""];
  const b = ["", "", "", ""];

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i] != null) {
      a[i] = props.data[i]["name"].toString();
      if (props.data[i]["YGPA"] != null) {
        b[i] = props.data[i]["YGPA"].toString();
      } else {
        if (props.data[i]["Fourth Year"] != null) {
          b[i] = props.data[i]["Fourth Year"].toString();
        } else {
          b[i] = props.data[i]["Total Marks"].toString();
        }
        const ar = b[i].split(" ");
        let x = Math.floor(ar[0]);
        let y = Math.floor(ar[2]);
        let z = x / y;
        z *= 10;
        console.log(z);
        b[i] = z.toString();
      }
    }
  }

  const chartData = [
    {
      label: a[0],
      value: b[0],
    },
    {
      label: a[1],
      value: b[1],
    },
    {
      label: a[2],
      value: b[2],
    },
    {
      label: a[3],
      value: b[3],
    },
  ];

  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "40%",
    boxShadow: "5px 10px",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "CGPA Plot ",
        subCaption: "",
        xAxisName: "Year",
        yAxisName: "CGPA",
        theme: "carbon",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default Chart;
