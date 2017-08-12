
// Here we have the plugin to make our alert look a little more appealing

swal({
  title: "Welcome!",
  text: "Let's see how much traffic YourApp has!",
  type: "info",
  confirmButtonText: "Explore!",
});


const days =   ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];

const weeks =   ["Week 1", "Week 2", "Week 3", "Week 4", "Week5", "Week 6", "Week 7"];

const months = ["January", "February", "March", "April", "May", "June", "July"];

var ctx= document.getElementById("line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  days,
        datasets: [
          {
            label: 'Daily',
            lineTension: 0.2,
            data: [12, 19, 3, 5, 2, 3, 11],
            backgroundColor: 'rgba(153,103,55, 1)',
            borderColor: 'rgba(243,134,48,1)' ,
            borderWidth: 1,
            pointBackgroundColor: 'rgb(105,210,231)',
            pointBorderColor: 'rgb(105,210,231)',
            pointRadius: 2,
            pointHoverBackgroundColor: 'rgb(224,228,204)',
            pointHoverRadius: 10
          },

        {
            label: 'Weekly',
            lineTension: 0.2,
            data: [133, 84, 21, 46, 25, 56, 140],
            backgroundColor: 'rgba(250,105, 0, 1)',
            borderColor: 'rgba(167,219,216, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgb(105,210,231)',
            pointBorderColor: 'rgb(105,210,231)',
            pointRadius: 2,
            pointHoverBackgroundColor: 'rgb(224,228,204)',
            pointHoverRadius: 10
        },
        {
            label: 'Monthly',
            lineTension: 0.2,
            data: [333, 204, 51, 146, 100, 166, 360],
            backgroundColor: 'rgba(167,219,216, 1)',
            borderColor: 'rgba(167,219,216, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgb(105,210,231)',
            pointBorderColor: 'rgb(105,210,231)',
            pointRadius: 2,
            pointHoverBackgroundColor: 'rgb(224,228,204)',
            pointHoverRadius: 10
        }
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


// Input element aligned to the right when the screen is at least 768px wide
// let width = $(window).width();
//
// const searchBar = $("#search");
//
// if ( width >= "768px") {
//   searchBar.attr("align","right");
// }
// else {
//   searchBar.removeAttr("align");
// }
