var ctx = document.getElementById('myChart').getContext('2d');
var gradient2 = ctx.createLinearGradient(0, 0, 0, 280);
  gradient2.addColorStop(0, 'rgba(7, 255, 255, 0.5)');
  gradient2.addColorStop(1, 'rgba(24, 54, 153, 0.5)');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ['0', '25', '50', '75', '100', '125', '150', '175', '200', '225', '250'], 
    datasets: [{
      label: '1',
      backgroundColor: gradient2,
      borderColor: 'transparent',
      data: [80, 94, 85, 92, 100, 94, 82, 85, 88, 60, 0]
    }]
  },
  // Configuration options go here
  options: {
    layout: {
      padding: {
        left: -10,
        right: -10,
        top: 0,
        bottom: -10
      }
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        },
      }]
    }
  },
});