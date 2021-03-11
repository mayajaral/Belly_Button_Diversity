var topFiveCityNames = topFiveCities.map(cityGrowths => cityGrowths.City);
var topFiveCityGrowths = topFiveCities.map(cityGrowths => parseInt(cityGrowths.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);