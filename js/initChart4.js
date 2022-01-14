const labels4 = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data4 = {
  labels: labels4,
  datasets: [
    {
      label: 'Dataset 1',
      data: [48,83,22,52,71,11,91],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
      type: 'line',
      order: 1
    },
    {
      label: 'Dataset 2',
      data: [62,23,4,45,27,18,39],
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
      },
      title: {
        display: true,
        text: 'Chart.js Combined Line/Bar Chart'
      }
    }
  },
};

const chart4 = new Chart(document.getElementById('chart4'), config4);
chart4.height = 300;
