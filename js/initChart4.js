const labels4 = ['周一','周二月','周三', '周四', '周五月', '周六', '周日'];
const data4 = {
  labels: labels4,
  datasets: [
    {
      label: '本周',
      data: [4800,8300,2200,5200,7100,1100,9100],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
      type: 'line',
      order: 1
    },
    {
      label: '上周',
      data: [6200,2300,400,4500,2700,1800,3900],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
      order: 0
    }
  ]
};
const config4 = {
  type: 'bar',
  data: data4,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
          labels: {
              color: '#FFFFFF'
          }
      },
      title: {
        display: true,
        text: '周交易毛利统计'
      }
    }
  },
};

const chart4 = new Chart(document.getElementById('chart4'), config4);
chart4.height = 300;
// chart4.defaults.color = '#FFFFFF';
