
// Here we have the plugin to make our alert look a little more appealing

swal({
  title: "Welcome!",
  text: "Feel free to explore all of this weather data for Mt. Fuji !",
  type: "info",
  confirmButtonText: "Explore!",
});


// Labels along the x-axis - Days of the week

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ];

// The lines on our graph

var highTemp = [48, 46, 50, 50, 50];

var lowTemp = [46, 45, 46, 48, 48];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      {
        data: highTemp,
        labels: 'High Temperature',
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
});
