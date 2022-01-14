const labels2 = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'My First dataset',
      data: [62,23,4,45,27,18,39],
      borderColor: '#ff6384',
      backgroundColor: '#ff6384',
      fill: true
    },
    {
      label: 'My Second dataset',
      data: [48,83,22,52,71,11,91],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
      fill: true
    },
    {
      label: 'My Third dataset',
      data: [92,23,74,35,27,58,29],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
      fill: true
    },
    {
      label: 'My Fourth dataset',
      data: [62,33,24,75,57,38,90],
      borderColor: '#ffcd56',
      backgroundColor: '#ffcd56',
      fill: true
    }
  ]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
      },
      tooltip: {
        mode: 'index'
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  }
};

const chart2 = new Chart(document.getElementById('chart2'), config2);
chart2.height = 300;
