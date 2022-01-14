const labels3 = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data3 = {
  labels: labels3,
  datasets: [
    {
      label: 'Dataset 1',
      data: [92,23,94,85,57,68,89],
      borderColor: '#ff6384',
      backgroundColor: '#ff6384',
    },
    {
      label: 'Dataset 2',
      data: [98,73,82,92,61,91,81],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
    }
  ]
};

const config3 = {
  type: 'radar',
  data: data3,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    }
  },
};

const chart3 = new Chart(document.getElementById('chart3'), config3);
chart3.height = 300;
