
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



// *************************************** Daily Chart ******************************************


var ctx= document.getElementById("daily-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  days,
        datasets: [
          {
            label: 'Daily',
            lineTension: 0.2,
            data: [12, 19, 3, 5, 2, 3, 11],
            backgroundColor: 'rgba(153,103,55, .5)',
            borderColor: 'rgba(243,134,48,1)' ,
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


// *************************************** Weekly Chart ******************************************

var ctx= document.getElementById("weekly-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  weeks,
        datasets: [
        {
            label: 'Weekly',
            lineTension: 0.2,
            data: [133, 84, 21, 46, 25, 56, 140],
            backgroundColor: 'rgba(250,105, 0, .5)',
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


// *************************************** Monthly Chart ******************************************

var ctx= document.getElementById("monthly-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  months,
        datasets: [
        {
            label: 'Monthly',
            lineTension: 0.2,
            data: [333, 204, 51, 146, 100, 166, 360],
            backgroundColor: 'rgba(167,219,216, .5)',
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


// Here we are just making the line chart nav interactive

// Daily button
$('#nav-daily').click(function() {
  $('#daily-line-chart').show();
  $('#weekly-line-chart').hide();
  $('#monthly-line-chart').hide();
  $('#nav-daily').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-weekly').css('background-color', 'rgb(224,228,204)');
  $('#nav-monthly').css('background-color', 'rgb(224,228,204)');

});


// Weekly button
$('#nav-weekly').click(function() {
  $('#weekly-line-chart').show();
  $('#daily-line-chart').hide();
  $('#monthly-line-chart').hide();
  $('#nav-weekly').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-daily').css('background-color', 'rgb(224,228,204)');
  $('#nav-monthly').css('background-color', 'rgb(224,228,204)');
});


// Monthly Button
$('#nav-monthly').click(function() {
  $('#monthly-line-chart').show();
  $('#weekly-line-chart').hide();
  $('#daily-line-chart').hide();
  $('#nav-monthly').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-daily').css('background-color', 'rgb(224,228,204)');
  $('#nav-weekly').css('background-color', 'rgb(224,228,204)');
});

// Here we set what will be visible(concerning the first line chart)
// when the user first comes to the page/app
$('#weekly-line-chart').hide();
$('#monthly-line-chart').hide();

//  Setting the daily button in the line chart nav as the selected button by default 
$('#nav-daily').css('background-color', 'rgba(243,134,48,.5)');
