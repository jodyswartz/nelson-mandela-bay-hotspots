import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "21 +",
    "#741f1f",
    (cases) => cases >= 21,
    "white"
  ),

  new LegendItem(
    "16 - 20",
    "#fd8d3c",
    (cases) => cases >= 16 && cases <= 20
  ),

  new LegendItem(
    "11 - 15",
    "#feb24c",
    (cases) => cases >= 11 && cases <= 15
  ),

  new LegendItem(
    "6 - 10",
    "#fed976",
    (cases) => cases >= 6 && cases <= 10
  ),

  new LegendItem(
    "1 - 5",
    "#ffffcc",
    (cases) => cases >= 1 && cases <= 5
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;