
// Here we have the plugin to make our alert look a little more appealing

swal({
  title: "Welcome!",
  text: "Let's see how much traffic YourApp has!",
  type: "info",
  confirmButtonText: "Explore!",
});


const days =   ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];
const weeks =   ["Week 1", "Week 2", "Week 3", "Week 4", "Week5", "Week 6", "Week 7"]
var ctx = document.getElementById("line-chart");

// Chart.defaults.global.responsive = false;

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [
          {
            label: 'Daily Users',
            lineTension: 0.2,
            data: [12, 19, 3, 5, 2, 3, 11],
            backgroundColor: 'rgba(167,219,216, 0.2)',
            borderColor: 'rgba(243,134,48,1)' ,
            borderWidth: 1,
            pointBackgroundColor: 'rgb(105,210,231)',
            pointBorderColor: 'rgb(105,210,231)',
            pointRadius: 2,
            pointHoverBackgroundColor: 'rgb(224,228,204)',
            pointHoverRadius: 10
          },

        // {
        //     label: 'Monthly Users',
        //     lineTension: 0.2,
        //     data: [133, 84, 21, 46, 25, 56, 140],
        //     backgroundColor: 'rgba(167,0,216, 0.2)',
        //     borderColor: 'rgba(24,134,5,1)',
        //     borderWidth: 1
        // }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
