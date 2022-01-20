const labels6 = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data6 = {
  labels: labels6,
  datasets: [
    {
      label: '废钢',
      data: [6200,2300,400,4500,2700,1800,3900],
      borderColor: '#05309c',
      backgroundColor: '#05309c',
      fill: true
    },
    {
      label: '不锈钢',
      data: [4800,8300,2200,5200,7100,1100,9100],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
      fill: true
    },
    {
      label: '特钢',
      data: [9200,2300,7400,3500,2700,5800,2900],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
      fill: true
    },
    {
      label: '特钢',
      data: [5200,3300,2400,7500,5700,3800,9000],
      borderColor: '#859adc',
      backgroundColor: '#859adc',
      fill: true
    }
  ]
};

const config6 = {
  type: 'line',
  data: data6,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: (ctx) => '区域交易分析'
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
          text: ''
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: ''
        }
      }
    }
  }
};

const chart6 = new Chart(document.getElementById('chart6'), config6);
chart6.height = 300;
