import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "81 +",
    "#741f1f",
    (cases) => cases >= 81,
    "white"
  ),

  new LegendItem(
    "61 - 80",
    "#fd8d3c",
    (cases) => cases >= 61 && cases <= 80
  ),

  new LegendItem(
    "41 - 60",
    "#feb24c",
    (cases) => cases >= 41 && cases <= 60
  ),

  new LegendItem(
    "21 - 40",
    "#fed976",
    (cases) => cases >= 21 && cases <= 40
  ),

  new LegendItem(
    "1 - 20",
    "#ffffcc",
    (cases) => cases >= 1 && cases <= 20
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;