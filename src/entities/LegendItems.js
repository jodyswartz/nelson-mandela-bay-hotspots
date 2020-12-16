import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "1,001 +",
    "#741f1f",
    // "#800026",
    (cases) => cases >= 1_001,
    "white"
  ),

  new LegendItem(
    "501 - 1000",
    // "#741f1f",
    "#fd8d3c",
    (cases) => cases >= 501 && cases < 1_000,
    "White"
  ),

  new LegendItem(
    "101 - 500",
    "#feb24c",
    (cases) => cases >= 101 && cases < 500
  ),

  new LegendItem(
    "51 - 100",
    "#fed976",
    (cases) => cases >= 51 && cases < 100
  ),

  new LegendItem(
    "1 - 50",
    "#ffffcc",
    (cases) => cases > 1 && cases < 50
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

/**
 * 7 > 1 million                        #8b0000
 * 6 >= 500 thousand < 1 million        #9e2a2a
 * 5 >= 200 thousand < 500 thousand     #b15555
 * 4 >= 100 thousand  < 200 Thousand    #c57f7f
 * 3 > 50 thousand < 100 thousand       #d8aaaa
 * 2 >= 0 < 50 thousand                 #ebd4d4
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
