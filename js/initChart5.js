const data5 = {
  labels: ['废钢', '不锈钢', '橡胶', '优钢', '其它'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,25,30,15,20],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 162, 235)',
        'rgb(255, 205, 86)',
        '#36a2eb',
        '#22cfcf'
      ],
    }
  ]
};

const config5 = {
  type: 'doughnut',
  data: data5,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: ''
      }
    }
  },
};

const chart5 = new Chart(document.getElementById('chart5'), config5);
chart5.height = 300;
chart5.width = 300;
