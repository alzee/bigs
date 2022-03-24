const labels0 = ['热轧','冷轧','钢管', '硅钢', '型钢', '中厚板', '不锈钢', '特钢'];
const data0 = {
  labels: labels0,
  datasets: [
    {
      label: '金额',
      data: [4800,8300,7200,6200,7100,9800,8100,8800],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
    }
  ]
};

const config0 = {
  type: 'bar',
  data: data0,
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                // display: false,
            }
        },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        //display: true,
        text: '当季交易商品排行'
      }
    }
  },
};

const chart0 = new Chart(document.getElementById('chart0'), config0);
