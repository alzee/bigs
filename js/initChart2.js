const labels2 = ['一月','二月','三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: '茅箭区',
      data: [6200,2300,400,4500,2700,1800,3900,2200,2500,1900,3400,4000],
      borderColor: '#05309c',
      backgroundColor: '#05309c',
      fill: true
    },
    {
      label: '张湾区',
      data: [4800,8300,2200,5200,7100,1100,9100,6000,5000,7000,4000,8000],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
      fill: true
    },
    {
      label: '白浪开发区',
      data: [9200,2300,7400,3500,2700,5800,2900,3000,7000,4000,6000,7800],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
      fill: true
    },
    //{
    //  label: 'My Fourth dataset',
    //  data: [62,33,24,75,57,38,90],
    //  borderColor: '#859adc',
    //  backgroundColor: '#859adc',
    //  fill: true
    //}
  ]
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    responsive: true,
    plugins: {
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

const chart2 = new Chart(document.getElementById('chart2'), config2);
chart2.height = 300;
