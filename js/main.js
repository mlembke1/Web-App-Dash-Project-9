// *********************************ALERT! ***************************************
$('span#close').click(function(){
  $('span.alert').css({
    'display': 'none',
    'transition': '2s'
  });
  $('header').css('margin-bottom', '3em');
});

// *********************************CHARTS! WOO HOO!***************************************


// *********************************LINE CHART! ***************************************

const hours = ['6 a.m.', '8 a.m.', '10 a.m.', '12 p.m.', '2 p.m.', '4 p.m.', '6 p.m.'];

const days =   ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];

const weeks =   ["Week 1", "Week 2", "Week 3", "Week 4", "Week5", "Week 6", "Week 7"];

const months = ["January", "February", "March", "April", "May", "June", "July"];




// *************************************** Hourly Line Chart ******************************************

Chart.defaults.global.legend.display = false;

var ctx= document.getElementById("hourly-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  hours,
        datasets: [
          {
            label: 'Hours',
            lineTension: 0.2,
            data: [1, 3, 3, 5, 7, 4, 11],
            backgroundColor: 'rgba(105,210,231, .7)',
            borderColor: 'rgba(243,134,48,1)' ,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(250,105, 0, .5)',
            pointBorderColor: 'rgba(250,105, 0, .5)',
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




// *************************************** Daily Line Chart ******************************************


var ctx= document.getElementById("daily-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  days,
        datasets: [
          {
            label: 'Days',
            lineTension: 0.2,
            data: [12, 19, 3, 5, 2, 3, 11],
            backgroundColor: 'rgba(153,103,55, .5)',
            borderColor: 'rgba(243,134,48,1)' ,
            borderWidth: 1,
            pointBackgroundColor: 'rgba(250,105, 0, .5)',
            pointBorderColor: 'rgba(250,105, 0, .5)',
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


// *************************************** Weekly  Line Chart ******************************************

var ctx= document.getElementById("weekly-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  weeks,
        datasets: [
        {
            label: 'Weeks',
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


// *************************************** Monthly  Line Chart ******************************************

var ctx= document.getElementById("monthly-line-chart");


var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:  months,
        datasets: [
        {
            label: 'Months',
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


// Here we are just making the line chart navigation interactive

let navButton = $('#line-chart-nav').length;
console.log(navButton);

// Hourly button
$('#nav-hourly').click(function() {
  $('#hourly-line-chart').show();
  $('#weekly-line-chart').hide();
  $('#monthly-line-chart').hide();
  $('#daily-line-chart').hide();
  $('#nav-hourly').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-daily').css('background-color', 'rgb(224,228,204)');
  $('#nav-weekly').css('background-color', 'rgb(224,228,204)');
  $('#nav-monthly').css('background-color', 'rgb(224,228,204)');
});

// Daily button
$('#nav-daily').click(function() {
  $('#daily-line-chart').show();
  $('#weekly-line-chart').hide();
  $('#monthly-line-chart').hide();
  $('#hourly-line-chart').hide();
  $('#nav-daily').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-weekly').css('background-color', 'rgb(224,228,204)');
  $('#nav-monthly').css('background-color', 'rgb(224,228,204)');
  $('#nav-hourly').css('background-color', 'rgb(224,228,204)');
});


// Weekly button
$('#nav-weekly').click(function() {
  $('#weekly-line-chart').show();
  $('#daily-line-chart').hide();
  $('#monthly-line-chart').hide();
  $('#hourly-line-chart').hide();
  $('#nav-weekly').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-daily').css('background-color', 'rgb(224,228,204)');
  $('#nav-monthly').css('background-color', 'rgb(224,228,204)');
  $('#nav-hourly').css('background-color', 'rgb(224,228,204)');
});


// Monthly Button
$('#nav-monthly').click(function() {
  $('#monthly-line-chart').show();
  $('#weekly-line-chart').hide();
  $('#daily-line-chart').hide();
  $('#hourly-line-chart').hide();
  $('#nav-monthly').css('background-color', 'rgba(243,134,48,.5)');
  $('#nav-daily').css('background-color', 'rgb(224,228,204)');
  $('#nav-weekly').css('background-color', 'rgb(224,228,204)');
  $('#nav-hourly').css('background-color', 'rgb(224,228,204)');
});

// Here we set what will be visible(concerning the first line chart)
// when the user first comes to the page/app
$('#daily-line-chart').hide();
$('#weekly-line-chart').hide();
$('#monthly-line-chart').hide();


//  Setting the daily button in the line chart nav as the selected button by default
$('#nav-hourly').css('background-color', 'rgba(243,134,48,.5)');
$('.line-chart-nav ul li:hover').css('background-color', 'rgba(243,134,48,.5)');






// ************************************BAR CHART!*********************************


var ctx= document.getElementById("bar-chart");


var lineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  days,
        datasets: [
          {
            label: 'Daily Traffic',
            data: [12, 19, 3, 5, 2, 3, 11],
            backgroundColor: 'rgba(250,105, 0, .5)',
            borderColor: 'rgba(167,219,216, 1)' ,
            borderWidth: 1,
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



// ************************************DOUGHNUT - CHART!*********************************


var ctx= document.getElementById("doughnut-chart");


var lineChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels:  ['Phones', 'Tablets', 'Desktop'],
        datasets: [
          {
            label: 'Users',
            data: [33.33, 33.33, 33.33],
            backgroundColor: ['rgba(250,105, 0, .5)', 'rgb(167,219,216)', 'rgb(105,210,231)'],
            borderColor: 'rgba(167,219,216, 1)' ,
            borderWidth: 1,
          }
      ]
    },
    options: {
      legend: {
        display: true
      },
      cutoutPercentage: 70,
      animation: {
        animateScale: true
      },
    }
});
