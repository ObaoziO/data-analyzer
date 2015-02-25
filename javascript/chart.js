loadChart = function(data){
  /*
    Using Chart.js
  */
  var data1 = data;

  var data = {
    labels: data1[0],
    datasetFill: false,
    datasets: dataset(data1)
  };
  var ctx = document.getElementById("myChart").getContext("2d");
  var myLineChart = new Chart(ctx).Line(data);
  document.getElementById("myChart").setAttribute("title","chart read out"); // by setting the attribute we can make the chart accessible
  return myLineChart;
}

function dataset(data) {
  var dataArray = [];
  var red = green = blue = 0;
  var colorIncrease = parseInt((255/ data.length).toFixed(0));

  for (var i = 1; i < data.length; i++) {
    var color = [red, green, blue].join(", ");
    var line = 
    {
      fillColor: "rgba(220, 220, 220, 0)",
      strokeColor: "rgba("+ color +", 1)",
      pointColor: "rgba("+ color +", 1)",

      //pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba("+ color +", 1)",
      data: data[i]
    }
    dataArray.push(line);
    red += colorIncrease + 15;
    green += colorIncrease;
    blue += colorIncrease - 15;

    console.log(color);
    console.log(line);
  }

  return dataArray;
}
